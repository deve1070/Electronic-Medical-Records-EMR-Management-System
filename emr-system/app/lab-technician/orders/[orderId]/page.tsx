'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

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

export default function OrderProcessPage({ params }: { params: { orderId: string } }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [order, setOrder] = useState<LabOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resultData, setResultData] = useState('');
  const [isPositive, setIsPositive] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated' || (session?.user && session.user.role !== 'LAB_TECHNICIAN')) {
      router.push('/auth/signin');
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/lab/orders/${params.orderId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch order');
        }
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        console.error('Error fetching order:', err);
        toast.error('Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchOrder();
    }
  }, [session, status, router, params.orderId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!order) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/lab/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: order.order_id,
          result_data: resultData,
          is_positive: isPositive,
          status: 'COMPLETED'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload result');
      }

      toast.success('Lab result uploaded successfully');
      router.push('/lab-technician/orders');
    } catch (err) {
      console.error('Error uploading result:', err);
      toast.error('Failed to upload lab result');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!order) {
    return <div className="text-red-500">Order not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Process Lab Order #{order.order_id}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Patient Name</Label>
                <p className="font-medium">{order.patient.full_name}</p>
              </div>
              <div>
                <Label>Contact</Label>
                <p className="font-medium">{order.patient.phone_number}</p>
              </div>
              <div>
                <Label>Test Type</Label>
                <p className="font-medium">{order.test_type}</p>
              </div>
              <div>
                <Label>Ordered By</Label>
                <p className="font-medium">Dr. {order.doctor.user.full_name}</p>
              </div>
              <div>
                <Label>Priority</Label>
                <p className="font-medium">{order.priority}</p>
              </div>
              <div>
                <Label>Order Date</Label>
                <p className="font-medium">{new Date(order.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="result">Test Results</Label>
                <Textarea
                  id="result"
                  value={resultData}
                  onChange={(e) => setResultData(e.target.value)}
                  placeholder="Enter detailed test results..."
                  className="mt-1"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="positive"
                  checked={isPositive}
                  onCheckedChange={setIsPositive}
                />
                <Label htmlFor="positive">Positive Result</Label>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Results'}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 