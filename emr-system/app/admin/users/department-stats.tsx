'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DepartmentStats {
  total: number;
  active: number;
  inactive: number;
  users: Array<{
    user_id: number;
    username: string;
    full_name: string;
    role: string;
    is_active: boolean;
  }>;
}

interface DepartmentStatsProps {
  department: string;
  label: string;
}

export default function DepartmentStats({ department, label }: DepartmentStatsProps) {
  const [stats, setStats] = useState<DepartmentStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log(`Fetching stats for ${department}`);
        const response = await fetch(`/api/admin/users/stats?role=${department}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.text();
          console.error('Error response:', errorData);
          throw new Error(`Failed to fetch department stats: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Received stats for ${department}:`, data);
        setStats(data);
      } catch (err) {
        console.error(`Error fetching stats for ${department}:`, err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching department statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [department]);

  if (loading) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
        No data available
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{label}</h2>
        <Link
          href={`/admin/users/${department.toLowerCase()}`}
          className="text-blue-600 hover:text-blue-800"
        >
          View Details →
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-blue-600">Total</div>
          <div className="text-2xl font-bold text-blue-700">{stats.total}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-green-600">Active</div>
          <div className="text-2xl font-bold text-green-700">{stats.active}</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-sm text-red-600">Inactive</div>
          <div className="text-2xl font-bold text-red-700">{stats.inactive}</div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Recent Additions</h3>
        <div className="space-y-2">
          {stats.users.length > 0 ? (
            stats.users.map((user) => (
              <div key={user.user_id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">{user.full_name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No recent users</p>
          )}
        </div>
      </div>
    </div>
  );
} 