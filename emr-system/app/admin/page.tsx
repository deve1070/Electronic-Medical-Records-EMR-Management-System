'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface DashboardStats {
  totalPatients: number;
  activeDoctors: number;
  pendingLabOrders: number;
}

interface RecoveryTime {
  diseaseName: string;
  averageRecoveryTime: number;
  totalCases: number;
}

interface DoctorCaseStats {
  doctorId: number;
  fullName: string;
  username: string;
  completedCases: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPatients: 0,
    activeDoctors: 0,
    pendingLabOrders: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recoveryTimes, setRecoveryTimes] = useState<RecoveryTime[]>([]);
  const [doctorStats, setDoctorStats] = useState<DoctorCaseStats[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError('Failed to load dashboard statistics');
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecoveryTimes = async () => {
      try {
        const response = await fetch('/api/diseases/recovery-time');
        if (!response.ok) {
          throw new Error('Failed to fetch recovery times');
        }
        const data = await response.json();
        setRecoveryTimes(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching recovery times:', err);
        setRecoveryTimes([]);
      }
    };

    const fetchDoctorStats = async () => {
      try {
        const response = await fetch('/api/admin/doctors/cases');
        if (!response.ok) {
          throw new Error('Failed to fetch doctor stats');
        }
        const data = await response.json();
        setDoctorStats(data.doctors);
      } catch (err) {
        console.error('Error fetching doctor stats:', err);
      }
    };

    fetchStats();
    fetchRecoveryTimes();
    fetchDoctorStats();
  }, []);

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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalPatients}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Doctors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.activeDoctors}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Lab Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.pendingLabOrders}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent System Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-500">No recent logs</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-500">No recent access logs</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Doctors by Completed Cases ({new Date().getFullYear()})</CardTitle>
        </CardHeader>
        <CardContent>
          {doctorStats.length === 0 ? (
            <p className="text-gray-500">No completed cases data available</p>
          ) : (
            <div className="space-y-4">
              {doctorStats.map((doctor) => (
                <div key={doctor.doctorId} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{doctor.fullName}</p>
                    <p className="text-sm text-gray-500">{doctor.username}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{doctor.completedCases}</p>
                    <p className="text-sm text-gray-500">completed cases</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Recovery Time by Disease</CardTitle>
        </CardHeader>
        <CardContent>
          {recoveryTimes.length === 0 ? (
            <p className="text-gray-500">No recovery records available</p>
          ) : (
            <ul>
              {recoveryTimes.map((disease: any) => (
                <li key={disease.diseaseName} className="mb-2">
                  <span className="font-medium">{disease.diseaseName}</span>
                  {disease.totalCases > 0 ? (
                    <span>: {disease.averageRecoveryTime.toFixed(2)} days (based on {disease.totalCases} cases)</span>
                  ) : (
                    <span className="text-gray-500">: No recovery data available</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 