'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import {
  Users,
  Activity,
  Pill,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface DashboardStats {
  totalPatients: number;
  activePatients: number;
  pendingVitals: number;
  lowStockMedications: number;
  dueMedications: number;
}

export default function NurseDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalPatients: 0,
    activePatients: 0,
    pendingVitals: 0,
    lowStockMedications: 0,
    dueMedications: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/nurse/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard statistics');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Nurse Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push('/nurse/patients')}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activePatients}</div>
            <p className="text-xs text-muted-foreground">
              Total Patients: {stats.totalPatients}
            </p>
            <div className="flex items-center text-xs text-blue-600 mt-2">
              View all patients <ArrowRight className="h-3 w-3 ml-1" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push('/nurse/vitals')}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Vitals</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingVitals}</div>
            <p className="text-xs text-muted-foreground">
              Need attention
            </p>
            <div className="flex items-center text-xs text-blue-600 mt-2">
              Check vital signs <ArrowRight className="h-3 w-3 ml-1" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push('/nurse/medications')}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Medications</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.lowStockMedications}</div>
            <p className="text-xs text-muted-foreground">
              Need replenishment
            </p>
            <div className="flex items-center text-xs text-blue-600 mt-2">
              View medications <ArrowRight className="h-3 w-3 ml-1" />
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push('/nurse/medications/due')}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Due Medications</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.dueMedications}</div>
            <p className="text-xs text-muted-foreground">
              Due within 1 hour
            </p>
            <div className="flex items-center text-xs text-blue-600 mt-2">
              View due medications <ArrowRight className="h-3 w-3 ml-1" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 