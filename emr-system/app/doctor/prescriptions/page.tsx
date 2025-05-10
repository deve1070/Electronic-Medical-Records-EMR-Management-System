'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

interface Prescription {
  prescription_id: number;
  patient: {
    full_name: string;
    phone_number: string;
  };
  medication: string;
  dosage: string;
  instructions: string;
  status: 'PENDING' | 'FILLED' | 'DISPENSED';
  created_at: string;
}

export default function PrescriptionsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  if (session?.user?.role !== 'DOCTOR') {
    redirect('/');
  }

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await fetch('/api/prescriptions');
      if (!response.ok) {
        throw new Error('Failed to fetch prescriptions');
      }
      const data = await response.json() as Prescription[];
      setPrescriptions(data);
    } catch (err) {
      setError('Error loading prescriptions');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading prescriptions...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Prescriptions</h1>
        <Button onClick={() => router.push('/doctor/prescriptions/new')}>
          <Plus className="w-4 h-4 mr-2" />
          New Prescription
        </Button>
      </div>

      <div className="grid gap-6">
        {prescriptions.map((prescription) => (
          <Card key={prescription.prescription_id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Prescription #{prescription.prescription_id}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  prescription.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                  prescription.status === 'FILLED' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {prescription.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Patient</p>
                  <p className="font-medium">{prescription.patient.full_name}</p>
                  <p className="text-sm text-gray-500">{prescription.patient.phone_number}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Prescribed On</p>
                  <p className="font-medium">
                    {new Date(prescription.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Medication</p>
                  <p className="font-medium">{prescription.medication}</p>
                  <p className="text-sm text-gray-500">Dosage: {prescription.dosage}</p>
                  <p className="text-sm text-gray-500">Instructions: {prescription.instructions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {prescriptions.length === 0 && (
          <p className="text-gray-500 text-center py-8">No prescriptions found</p>
        )}
      </div>
    </div>
  );
} 