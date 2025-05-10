'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LabOrder {
  test_type: string;
  created_at: string;
}

interface PendingPatient {
  patient_id: number;
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  created_at: string;
  LabOrders?: LabOrder[];
}

export default function PendingDiagnosesPage() {
  const { data: session } = useSession();
  const [patients, setPatients] = useState<PendingPatient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPendingPatients = async () => {
      try {
        const response = await fetch('/api/doctor/pending-diagnoses');
        if (response.ok) {
          const data = await response.json();
          setPatients(data);
        } else {
          throw new Error('Failed to fetch pending patients');
        }
      } catch (error) {
        console.error('Error fetching pending patients:', error);
        setError('Failed to load pending patients');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingPatients();
  }, []);

  if (session?.user?.role !== 'DOCTOR') {
    redirect('/');
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pending Diagnoses</h1>
        <Link href="/doctor">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      {patients.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500">No patients waiting for diagnosis</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((patient) => (
            <Card key={patient.patient_id}>
              <CardHeader>
                <CardTitle>{patient.full_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    DOB: {new Date(patient.date_of_birth).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">Gender: {patient.gender}</p>
                  <p className="text-sm text-gray-500">Phone: {patient.phone_number}</p>
                  <p className="text-sm text-gray-500">
                    Arrived: {new Date(patient.created_at).toLocaleTimeString()}
                  </p>
                  {patient.LabOrders && patient.LabOrders.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">Pending Lab Tests:</p>
                      <ul className="mt-1 space-y-1">
                        {patient.LabOrders.map((order, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {order.test_type} (ordered at {new Date(order.created_at).toLocaleTimeString()})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <Link href={`/doctor/patients/${patient.patient_id}/diagnosis`}>
                  <Button className="mt-4 w-full">Start Diagnosis</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 