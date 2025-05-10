'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LabResult {
  result_id: number;
  order_id: number;
  test_type: string;
  status: string;
  is_positive: boolean;
  created_at: string;
  patient: {
    full_name: string;
  };
  order: {
    doctor: {
      user: {
        full_name: string;
      };
    };
  };
}

export default function LabResultsPage() {
  const { data: session } = useSession();
  const [results, setResults] = useState<LabResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('/api/lab/results');
        if (!response.ok) {
          throw new Error('Failed to fetch lab results');
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError('Failed to load lab results');
        console.error('Error fetching results:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (session?.user?.role !== 'TECHNICIAN') {
    redirect('/');
  }

  if (loading) {
    return <div>Loading lab results...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lab Test Results</h1>
        <Link href="/technician">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      {results.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">No lab results found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {results.map((result) => (
            <Card key={result.result_id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Result #{result.result_id}</CardTitle>
                    <p className="text-sm text-gray-500">
                      Patient: {result.patient.full_name}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    result.is_positive 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {result.is_positive ? 'Positive' : 'Negative'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Test Type:</span> {result.test_type}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Ordered By:</span> {result.order.doctor.user.full_name}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Date:</span> {new Date(result.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex justify-end items-end">
                    <Link href={`/technician/results/${result.result_id}`}>
                      <Button variant="outline">View Details</Button>
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