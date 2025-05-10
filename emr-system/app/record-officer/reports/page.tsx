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

interface ReportData {
  totalPatients: number;
  newRegistrations: number;
  activeCases: number;
  completedCases: number;
  labTests: {
    total: number;
    pending: number;
    completed: number;
  };
  diagnoses: {
    total: number;
    byDisease: { disease: string; count: number }[];
  };
  monthlyStats: {
    month: string;
    newPatients: number;
    activeCases: number;
  }[];
}

export default function ReportsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [reportData, setReportData] = useState<ReportData | null>(null);
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
    const fetchReportData = async () => {
      try {
        const response = await fetch('/api/record-officer/reports');
        if (!response.ok) {
          throw new Error('Failed to fetch report data');
        }
        const data = await response.json();
        setReportData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.role === 'RECORD_OFFICER') {
      fetchReportData();
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

  if (!reportData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">No report data available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Health Center Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{reportData.totalPatients}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{reportData.newRegistrations}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{reportData.activeCases}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{reportData.completedCases}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Lab Tests Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Tests</span>
                <Badge variant="outline">{reportData.labTests.total}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Pending Tests</span>
                <Badge variant="secondary">{reportData.labTests.pending}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Completed Tests</span>
                <Badge variant="default">{reportData.labTests.completed}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Diagnoses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportData.diagnoses.byDisease.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.disease}</span>
                  <Badge variant="outline">{item.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportData.monthlyStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>{stat.month}</span>
                <div className="flex gap-4">
                  <Badge variant="outline">New Patients: {stat.newPatients}</Badge>
                  <Badge variant="outline">Active Cases: {stat.activeCases}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 