'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Prescription {
  id: number;
  patientName: string;
  patientAge: number;
  patientGender: string;
  doctorId: number;
  medication: string;
  dosage: string;
  instructions: string;
  status: string;
  createdAt: Date;
}

interface PrescriptionResponse {
  total: number;
  prescriptions: Prescription[];
}

export default function PrescriptionsPage() {
  const { data: session } = useSession();
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<number | null>(null);

  useEffect(() => {
    if (session?.user?.role !== 'PHARMACIST') {
      redirect('/');
    }
  }, [session]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await fetch('/api/pharmacist/prescriptions');
        if (!response.ok) {
          throw new Error('Failed to fetch prescriptions');
        }
        const data = await response.json() as PrescriptionResponse;
        setPrescriptions(data.prescriptions);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.role === 'PHARMACIST') {
      fetchPrescriptions();
    }
  }, [session]);

  const handleStatusUpdate = async (prescriptionId: number, newStatus: string) => {
    setUpdating(prescriptionId);
    try {
      const response = await fetch(`/api/pharmacist/prescriptions/${prescriptionId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update prescription status');
      }

      setPrescriptions(prev =>
        prev.map(p =>
          p.id === prescriptionId ? { ...p, status: newStatus } : p
        )
      );

      toast.success('Prescription status updated successfully');
    } catch (err) {
      console.error('Error updating prescription:', err);
      toast.error('Failed to update prescription status');
    } finally {
      setUpdating(null);
    }
  };

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
        <h1 className="text-3xl font-bold">Prescriptions</h1>
      </div>

      <div className="grid gap-6">
        {prescriptions.map((prescription) => (
          <Card key={prescription.id}>
            <CardContent className="flex justify-between items-start p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{prescription.patientName}</h3>
                <p className="text-gray-600">
                  Age: {prescription.patientAge} | Gender: {prescription.patientGender}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Medication:</span> {prescription.medication}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Dosage:</span> {prescription.dosage}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Instructions:</span> {prescription.instructions}
                </p>
                <p className="text-sm text-gray-500">
                  Prescribed: {new Date(prescription.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <Badge variant={
                  prescription.status === 'PENDING' ? 'default' :
                  prescription.status === 'FILLED' ? 'secondary' :
                  'outline'
                }>
                  {prescription.status}
                </Badge>
                {prescription.status === 'PENDING' && (
                  <Button
                    onClick={() => handleStatusUpdate(prescription.id, 'FILLED')}
                    disabled={updating === prescription.id}
                  >
                    {updating === prescription.id ? 'Updating...' : 'Fill Prescription'}
                  </Button>
                )}
                {prescription.status === 'FILLED' && (
                  <Button
                    onClick={() => handleStatusUpdate(prescription.id, 'DISPENSED')}
                    disabled={updating === prescription.id}
                  >
                    {updating === prescription.id ? 'Updating...' : 'Mark as Dispensed'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {prescriptions.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No pending prescriptions</p>
          </div>
        )}
      </div>
    </div>
  );
} 