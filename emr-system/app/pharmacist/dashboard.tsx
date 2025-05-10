'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DashboardStats {
  totalMedications: number;
  lowStockItems: number;
  pendingPrescriptions: number;
  expiringItems: number;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalMedications: 0,
    lowStockItems: 0,
    pendingPrescriptions: 0,
    expiringItems: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Dashboard - Session status:', status);
    console.log('Dashboard - Session data:', session);

    if (status === 'loading') {
      console.log('Dashboard - Still loading session');
      return;
    }

    if (status === 'unauthenticated') {
      console.log('Dashboard - User is not authenticated, redirecting to sign in');
      router.push('/auth/signin');
      return;
    }

    if (!session?.user) {
      console.log('Dashboard - No user in session');
      return;
    }

    console.log('Dashboard - User role:', session.user.role);
    if (session.user.role !== 'PHARMACIST') {
      console.log('Dashboard - User is not a pharmacist, redirecting to unauthorized');
      router.push('/unauthorized');
      return;
    }

    const fetchStats = async () => {
      try {
        console.log('Dashboard - Fetching stats');
        const response = await fetch('/api/pharmacy/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        console.log('Dashboard - Stats fetched successfully:', data);
        setStats(data);
      } catch (err) {
        console.error('Dashboard - Error fetching stats:', err);
        setError('Failed to load dashboard statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [session, status, router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Pharmacy Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/pharmacist/inventory">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Total Medications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalMedications}</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/pharmacist/inventory">
          <Card className="hover:shadow-lg transition-shadow bg-yellow-50">
            <CardHeader>
              <CardTitle>Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.lowStockItems}</p>
              {stats.lowStockItems > 0 && (
                <p className="text-sm text-yellow-600 mt-1">Requires attention</p>
              )}
            </CardContent>
          </Card>
        </Link>

        <Link href="/pharmacist/prescriptions">
          <Card className="hover:shadow-lg transition-shadow bg-blue-50">
            <CardHeader>
              <CardTitle>Pending Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.pendingPrescriptions}</p>
              {stats.pendingPrescriptions > 0 && (
                <p className="text-sm text-blue-600 mt-1">Need processing</p>
              )}
            </CardContent>
          </Card>
        </Link>

        <Link href="/pharmacist/inventory">
          <Card className="hover:shadow-lg transition-shadow bg-red-50">
            <CardHeader>
              <CardTitle>Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.expiringItems}</p>
              {stats.expiringItems > 0 && (
                <p className="text-sm text-red-600 mt-1">Within 30 days</p>
              )}
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
} 