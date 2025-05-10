'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface LabOrder {
  order_id: number;
  patient: {
    full_name: string;
    phone_number: string;
  };
  doctor: {
    user: {
      full_name: string;
    }
  };
  test_type: string;
  status: string;
  priority: string;
  created_at: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [pendingOrders, setPendingOrders] = useState<LabOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Dashboard - Session status:', status);
    console.log('Dashboard - Session data:', session);

    if (status === 'loading') {
      console.log('Dashboard - Still loading session');
      return; // Don't redirect while loading
    }

    if (status === 'unauthenticated') {
      console.log('Dashboard - User is not authenticated, redirecting to sign in');
      router.push('/auth/signin');
      return;
    }

    if (!session?.user) {
      console.log('Dashboard - No user in session');
      return;
    }

    console.log('Dashboard - User role:', session.user.role);
    if (session.user.role !== 'LAB_TECHNICIAN') {
      console.log('Dashboard - User is not a lab technician, redirecting to unauthorized');
      router.push('/unauthorized');
      return;
    }

    const fetchOrders = async () => {
      try {
        console.log('Dashboard - Fetching orders');
        const response = await fetch('/api/lab/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        console.log('Dashboard - Orders fetched successfully:', data);
        setPendingOrders(data);
      } catch (err) {
        console.error('Dashboard - Error fetching orders:', err);
        setError('Failed to load pending orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session, status, router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const urgentOrders = pendingOrders.filter(order => order.priority === 'HIGH');
  const completedToday = pendingOrders.filter(order => {
    const today = new Date().toISOString().split('T')[0];
    return order.status === 'COMPLETED' && order.created_at.startsWith(today);
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Laboratory Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pendingOrders.length}</p>
            <Link href="/lab-technician/orders">
              <Button className="mt-4 w-full">View All</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Urgent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{urgentOrders.length}</p>
            <Link href="/lab-technician/orders?priority=HIGH">
              <Button className="mt-4 w-full" variant="destructive">View Urgent</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{completedToday.length}</p>
            <Link href="/lab-technician/results">
              <Button className="mt-4 w-full" variant="outline">View Results</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        {pendingOrders.length > 0 ? (
          <div className="space-y-4">
            {pendingOrders.slice(0, 5).map((order) => (
              <div key={order.order_id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">{order.patient.full_name}</p>
                  <p className="text-sm text-gray-500">
                    {order.test_type} - Ordered by Dr. {order.doctor.user.full_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={order.priority === 'HIGH' ? 'destructive' : 'default'}>
                    {order.priority}
                  </Badge>
                  <Link href={`/lab-technician/orders/${order.order_id}`}>
                    <Button size="sm">Process</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No pending orders</p>
        )}
      </div>
    </div>
  );
} 