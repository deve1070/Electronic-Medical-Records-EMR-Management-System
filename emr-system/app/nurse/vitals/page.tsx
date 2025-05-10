'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface VitalSign {
  vital_id: number;
  patient_id: number;
  patient_name: string;
  temperature: number;
  blood_pressure: string;
  heart_rate: number;
  respiratory_rate: number;
  oxygen_saturation: number;
  recorded_at: string;
}

export default function NurseVitalsPage() {
  const { data: session } = useSession();
  const [vitals, setVitals] = useState<VitalSign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVitals = async () => {
      try {
        const response = await fetch('/api/nurse/vitals');
        if (!response.ok) {
          throw new Error('Failed to fetch vital signs');
        }
        const data = await response.json();
        setVitals(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVitals();
  }, []);

  const filteredVitals = vitals.filter(vital =>
    vital.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <Card>
        <CardHeader>
          <CardTitle>Vital Signs Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search by patient name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Temperature (°C)</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Heart Rate (bpm)</TableHead>
                <TableHead>Respiratory Rate</TableHead>
                <TableHead>O2 Saturation (%)</TableHead>
                <TableHead>Recorded At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVitals.map((vital) => (
                <TableRow key={vital.vital_id}>
                  <TableCell>{vital.patient_name}</TableCell>
                  <TableCell>{vital.temperature}</TableCell>
                  <TableCell>{vital.blood_pressure}</TableCell>
                  <TableCell>{vital.heart_rate}</TableCell>
                  <TableCell>{vital.respiratory_rate}</TableCell>
                  <TableCell>{vital.oxygen_saturation}</TableCell>
                  <TableCell>{new Date(vital.recorded_at).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 