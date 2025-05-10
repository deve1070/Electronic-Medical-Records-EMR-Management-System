'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface MedicalRecord {
  history_id: number;
  patient_id: number;
  patient: {
    full_name: string;
  };
  technician: {
    full_name: string;
  };
  record_date: string;
  notes: string;
  created_at: string;
}

export default function MedicalRecordsPage() {
  const { data: session } = useSession();
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('/api/record-officer/medical-records');
        if (response.ok) {
          const data = await response.json();
          setRecords(data);
        } else {
          throw new Error('Failed to fetch medical records');
        }
      } catch (error) {
        console.error('Error fetching medical records:', error);
        setError('Failed to load medical records');
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
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

  const filteredRecords = records.filter(record =>
    record.patient.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Medical Records</h1>
        <Link href="/record-officer/medical-records/new">
          <Button>Add New Record</Button>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          type="text"
          placeholder="Search by patient name or record content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {filteredRecords.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500">
              {searchTerm ? 'No records found matching your search.' : 'No medical records available.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {filteredRecords.map((record) => (
            <Card key={record.history_id}>
              <CardHeader>
                <CardTitle>{record.patient.full_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Record Date</p>
                    <p className="font-medium">{new Date(record.record_date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Recorded By</p>
                    <p className="font-medium">{record.technician.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Notes</p>
                    <p className="whitespace-pre-wrap">{record.notes}</p>
                  </div>
                  <div className="flex justify-end">
                    <Link href={`/record-officer/medical-records/${record.history_id}/edit`}>
                      <Button variant="outline">Edit Record</Button>
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