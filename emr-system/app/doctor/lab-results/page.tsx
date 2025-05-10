'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface LabResult {
  result_id: number;
  patient_id: number;
  patient: {
    full_name: string;
  };
  technician: {
    full_name: string;
  };
  result_data: string;
  status: string;
  is_positive: boolean;
  is_viewed: boolean;
  created_at: string;
}

export default function LabResultsPage() {
  const { data: session } = useSession();
  const [results, setResults] = useState<LabResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLabResults = async () => {
      try {
        const response = await fetch('/api/doctor/lab-results');
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          throw new Error('Failed to fetch lab results');
        }
      } catch (error) {
        console.error('Error fetching lab results:', error);
        setError('Failed to load lab results');
      } finally {
        setLoading(false);
      }
    };

    fetchLabResults();
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
        <h1 className="text-3xl font-bold">Lab Results</h1>
        <Link href="/doctor">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      {results.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500">No lab results available</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <Card key={result.result_id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{result.patient.full_name}</CardTitle>
                  <Badge variant={result.is_positive ? "destructive" : "default"}>
                    {result.is_positive ? "Positive" : "Negative"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    Technician: {result.technician.full_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Status: {result.status}
                  </p>
                  <p className="text-sm text-gray-500">
                    Date: {new Date(result.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Time: {new Date(result.created_at).toLocaleTimeString()}
                  </p>
                  <div className="mt-4 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm">{result.result_data}</p>
                  </div>
                </div>
                <Link href={`/doctor/patients/${result.patient_id}/lab-results`}>
                  <Button className="mt-4 w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 