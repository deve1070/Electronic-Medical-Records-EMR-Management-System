'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import Link from 'next/link';

interface Patient {
  patient_id: number;
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  address: string;
  created_at: string;
}

export default function PatientsPage() {
  const { data: session } = useSession();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/record-officer/patients');
        if (response.ok) {
          const data = await response.json();
          setPatients(data);
        } else {
          throw new Error('Failed to fetch patients');
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError('Failed to load patients');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (session?.user?.role !== 'RECORD_OFFICER') {
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

  const filteredPatients = patients.filter(patient =>
    patient.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone_number.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Patients</h1>
        <Link href="/record-officer/patients/new">
          <Button>Add New Patient</Button>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          type="text"
          placeholder="Search by name or phone number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {filteredPatients.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500">
              {searchTerm ? 'No patients found matching your search.' : 'No patients registered yet.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.patient_id}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{patient.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">{new Date(patient.date_of_birth).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">{patient.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{patient.phone_number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{patient.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Registered On</p>
                    <p className="font-medium">{new Date(patient.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-4">
                  <Link href={`/record-officer/patients/${patient.patient_id}/edit`}>
                    <Button variant="outline">Edit</Button>
                  </Link>
                  <Link href={`/record-officer/patients/${patient.patient_id}/medical-records`}>
                    <Button>View Medical Records</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 