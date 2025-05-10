'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Activity {
  log_id: number;
  user: {
    full_name: string;
  };
  patient: {
    full_name: string;
  };
  action: string;
  resource: string;
  details: string | null;
  timestamp: string;
}

export default function ActivitiesPage() {
  const { data: session } = useSession();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/record-officer/activities');
        if (response.ok) {
          const data = await response.json();
          setActivities(data);
        } else {
          throw new Error('Failed to fetch activities');
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
        setError('Failed to load activities');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Activity Log</h1>
        <Link href="/record-officer">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>

      {activities.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500">No activities recorded yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {activities.map((activity) => (
            <Card key={activity.log_id}>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">User</p>
                    <p className="font-medium">{activity.user.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Patient</p>
                    <p className="font-medium">{activity.patient.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Action</p>
                    <p className="font-medium">{activity.action}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Resource</p>
                    <p className="font-medium">{activity.resource}</p>
                  </div>
                  {activity.details && (
                    <div className="md:col-span-2 lg:col-span-4">
                      <p className="text-sm text-gray-500">Details</p>
                      <p className="font-medium">{activity.details}</p>
                    </div>
                  )}
                  <div className="md:col-span-2 lg:col-span-4 text-right">
                    <p className="text-sm text-gray-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
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