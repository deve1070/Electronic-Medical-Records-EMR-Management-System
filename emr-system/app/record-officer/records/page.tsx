'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface PatientRecord {
  patient_id: number;
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  address: string;
  created_at: string;
  Cases: {
    case_id: number;
    status: string;
    priority: string;
    created_at: string;
  }[];
}

export default function RecordsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [records, setRecords] = useState<PatientRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (session?.user?.role !== 'RECORD_OFFICER') {
      router.push('/');
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        console.log('Fetching records...');
        const response = await fetch('/api/record-officer/records');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.details || `Failed to fetch records: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        setRecords(data);
      } catch (err) {
        console.error('Error in fetchRecords:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching records');
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.role === 'RECORD_OFFICER') {
      fetchRecords();
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
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patient Records</h1>
        <Button onClick={() => router.push('/record-officer/register')}>
          Register New Patient
        </Button>
      </div>

      {records.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No patient records found.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {records.map((record) => (
            <Card key={record.patient_id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{record.full_name}</CardTitle>
                    <CardDescription>
                      ID: {record.patient_id} | DOB: {format(new Date(record.date_of_birth), 'PPP')}
                    </CardDescription>
                  </div>
                  <Badge variant={record.Cases.length > 0 ? 'default' : 'secondary'}>
                    {record.Cases.length} Case(s)
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p>{record.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{record.phone_number}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Address</p>
                    <p>{record.address}</p>
                  </div>
                </div>
                {record.Cases.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Recent Cases</h3>
                    <div className="space-y-2">
                      {record.Cases.map((case_) => (
                        <div
                          key={case_.case_id}
                          className="flex justify-between items-center p-2 bg-gray-50 rounded"
                        >
                          <span>Case #{case_.case_id}</span>
                          <div className="flex gap-2">
                            <Badge variant="outline">{case_.status}</Badge>
                            <Badge variant="outline">{case_.priority}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 