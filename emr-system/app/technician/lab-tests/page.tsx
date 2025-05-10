'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface LabTest {
  test_id: number;
  name: string;
  description: string;
  equipment_required: string[];
  estimated_duration: string;
  status: 'AVAILABLE' | 'MAINTENANCE' | 'OUT_OF_SERVICE';
}

interface LabOrder {
  order_id: number;
  test_type: string;
  priority: string;
  patient: {
    full_name: string;
    patient_id: number;
  };
  doctor: {
    user: {
      full_name: string;
    };
  };
  ordered_by_user: {
    full_name: string;
  };
}

export default function LabTestsPage() {
  const { data: session } = useSession();
  const [tests, setTests] = useState<LabTest[]>([]);
  const [orders, setOrders] = useState<LabOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<LabOrder | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [resultData, setResultData] = useState('');
  const [isPositive, setIsPositive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testsResponse, ordersResponse] = await Promise.all([
          fetch('/api/lab/tests'),
          fetch('/api/lab/orders')
        ]);

        if (!testsResponse.ok || !ordersResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [testsData, ordersData] = await Promise.all([
          testsResponse.json(),
          ordersResponse.json()
        ]);

        setTests(testsData);
        setOrders(ordersData);
      } catch (err) {
        setError('Failed to load data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUploadResult = async () => {
    if (!selectedOrder || !resultData) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('/api/lab/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: selectedOrder.order_id,
          patient_id: selectedOrder.patient.patient_id,
          result_data: resultData,
          is_positive: isPositive,
          status: 'COMPLETED'
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Failed to upload result');
      }

      toast.success('Result uploaded successfully');
      setIsUploadDialogOpen(false);
      setResultData('');
      setIsPositive(false);
      setSelectedOrder(null);

      // Refresh the orders list
      const ordersResponse = await fetch('/api/lab/orders');
      if (ordersResponse.ok) {
        const ordersData = await ordersResponse.json();
        setOrders(ordersData);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to upload result');
      console.error('Error uploading result:', err);
    }
  };

  if (session?.user?.role !== 'TECHNICIAN') {
    redirect('/');
  }

  if (loading) {
    return <div>Loading lab tests...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lab Tests & Results</h1>
        <Link href="/technician">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <p className="text-center text-gray-500">No pending orders found</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.order_id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #{order.order_id}</p>
                          <p className="text-sm text-gray-500">
                            Patient: {order.patient.full_name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Test Type: {order.test_type}
                          </p>
                          <p className="text-sm text-gray-500">
                            Doctor: {order.doctor.user.full_name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Ordered By: {order.ordered_by_user.full_name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Priority: {order.priority}
                          </p>
                        </div>
                        <Dialog open={isUploadDialogOpen && selectedOrder?.order_id === order.order_id} onOpenChange={setIsUploadDialogOpen}>
                          <DialogTrigger asChild>
                            <Button onClick={() => setSelectedOrder(order)}>
                              Upload Result
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Upload Lab Result</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="resultData">Result Data</Label>
                                <Textarea
                                  id="resultData"
                                  value={resultData}
                                  onChange={(e) => setResultData(e.target.value)}
                                  placeholder="Enter test results..."
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label htmlFor="isPositive">Test Result</Label>
                                <Select
                                  value={isPositive ? 'positive' : 'negative'}
                                  onValueChange={(value) => setIsPositive(value === 'positive')}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select result" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="positive">Positive</SelectItem>
                                    <SelectItem value="negative">Negative</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button onClick={handleUploadResult} className="w-full">
                                Submit Result
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Lab Tests</CardTitle>
          </CardHeader>
          <CardContent>
            {tests.length === 0 ? (
              <p className="text-center text-gray-500">No lab tests found</p>
            ) : (
              <div className="grid gap-4">
                {tests.map((test) => (
                  <Card key={test.test_id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{test.name}</CardTitle>
                          <p className="text-sm text-gray-500">
                            Duration: {test.estimated_duration}
                          </p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          test.status === 'AVAILABLE' 
                            ? 'bg-green-100 text-green-800'
                            : test.status === 'MAINTENANCE'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {test.status.replace('_', ' ')}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm">{test.description}</p>
                        <div>
                          <p className="text-sm font-medium mb-2">Required Equipment:</p>
                          <div className="flex flex-wrap gap-2">
                            {test.equipment_required.map((equipment, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                              >
                                {equipment}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 