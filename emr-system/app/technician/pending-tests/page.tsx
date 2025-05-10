'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LabOrder {
  order_id: number;
  test_type: string;
  status: string;
  priority: string;
  created_at: string;
  patient: {
    full_name: string;
    phone_number: string;
  };
  doctor: {
    user: {
      full_name: string;
    };
  };
}

export default function PendingTestsPage() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<LabOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/lab/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch pending orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError('Failed to load pending orders');
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (session?.user?.role !== 'TECHNICIAN') {
    redirect('/');
  }

  if (loading) {
    return <div>Loading pending tests...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pending Lab Tests</h1>
        <Link href="/technician">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">No pending tests found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <Card key={order.order_id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Test Order #{order.order_id}</CardTitle>
                    <p className="text-sm text-gray-500">
                      Patient: {order.patient.full_name}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.priority === 'HIGH' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.priority} Priority
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Test Type:</span> {order.test_type}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Ordered By:</span> {order.doctor.user.full_name}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Patient Contact:</span> {order.patient.phone_number}
                    </p>
                  </div>
                  <div className="flex justify-end items-end">
                    <Link href={`/technician/upload?orderId=${order.order_id}`}>
                      <Button>Upload Results</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 