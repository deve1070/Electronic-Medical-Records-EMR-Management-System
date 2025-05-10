'use client';

import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

interface Patient {
  patient_id: number;
  full_name: string;
}

export default function NewMedicalRecordPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loadingPatients, setLoadingPatients] = useState(true);

  const [formData, setFormData] = useState({
    patient_id: '',
    notes: '',
    record_date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/record-officer/patients');
        if (response.ok) {
          const data = await response.json();
          setPatients(data);
        } else {
          throw new Error('Failed to fetch patients');
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError('Failed to load patients');
      } finally {
        setLoadingPatients(false);
      }
    };

    fetchPatients();
  }, []);

  if (session?.user?.role !== 'RECORD_OFFICER') {
    redirect('/');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/record-officer/medical-records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          patient_id: parseInt(formData.patient_id)
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create medical record');
      }

      router.push('/record-officer/medical-records');
    } catch (error) {
      console.error('Error creating medical record:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add Medical Record</h1>
        <Link href="/record-officer/medical-records">
          <Button variant="outline">Back to Records</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Record Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="patient_id">Patient</Label>
                <Select
                  value={formData.patient_id}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, patient_id: value }))}
                  disabled={loadingPatients}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    {patients.map((patient) => (
                      <SelectItem key={patient.patient_id} value={patient.patient_id.toString()}>
                        {patient.full_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {loadingPatients && (
                  <p className="text-sm text-gray-500">Loading patients...</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="record_date">Record Date</Label>
                <Input
                  id="record_date"
                  type="date"
                  value={formData.record_date}
                  onChange={(e) => setFormData(prev => ({ ...prev, record_date: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  rows={6}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Link href="/record-officer/medical-records">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
              <Button type="submit" disabled={loading || loadingPatients}>
                {loading ? 'Saving...' : 'Save Record'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 