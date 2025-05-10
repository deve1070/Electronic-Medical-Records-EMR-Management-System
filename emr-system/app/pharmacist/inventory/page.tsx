'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  expiryDate: Date;
}

interface InventoryResponse {
  lowStockItems: InventoryItem[];
  expiringItems: InventoryItem[];
}

export default function InventoryPage() {
  const { data: session } = useSession();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user?.role !== 'PHARMACIST') {
      redirect('/');
    }
  }, [session]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('/api/pharmacist/inventory');
        if (!response.ok) {
          throw new Error('Failed to fetch inventory');
        }
        const data = await response.json() as InventoryResponse;
        
        // Combine low stock and expiring items, removing duplicates
        const allItems = [
          ...data.lowStockItems,
          ...data.expiringItems.filter(expItem => 
            !data.lowStockItems.some(lowItem => lowItem.id === expItem.id)
          )
        ];

        setInventory(allItems);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.role === 'PHARMACIST') {
      fetchInventory();
    }
  }, [session]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-4">Error: {error}</div>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <Button>Add New Medication</Button>
      </div>

      <div className="grid gap-6">
        {inventory.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex justify-between items-center p-6">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  Quantity: {item.quantity} / Minimum: {item.minQuantity}
                </p>
                <p className="text-gray-600">
                  Expires: {new Date(item.expiryDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {item.quantity <= item.minQuantity && (
                  <Badge variant="destructive">Low Stock</Badge>
                )}
                {new Date(item.expiryDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) && (
                  <Badge variant="secondary">Expiring Soon</Badge>
                )}
                <Button variant="outline" size="sm">Update Stock</Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {inventory.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No medications found in inventory</p>
          </div>
        )}
      </div>
    </div>
  );
} 