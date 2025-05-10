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

interface DueMedication {
  prescription_id: number;
  patient_id: number;
  patient_name: string;
  medication: string;
  dosage: string;
  instructions: string;
  due_time: string;
}

export default function DueMedicationsPage() {
  const { data: session } = useSession();
  const [medications, setMedications] = useState<DueMedication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDueMedications = async () => {
      try {
        const response = await fetch('/api/nurse/medications/due');
        if (!response.ok) {
          throw new Error('Failed to fetch due medications');
        }
        const data = await response.json();
        setMedications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDueMedications();
  }, []);

  const filteredMedications = medications.filter(medication =>
    medication.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medication.medication.toLowerCase().includes(searchTerm.toLowerCase())
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
          <CardTitle>Medications Due Within One Hour</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search by patient name or medication..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Instructions</TableHead>
                <TableHead>Due Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMedications.map((medication) => (
                <TableRow key={medication.prescription_id}>
                  <TableCell>{medication.patient_name}</TableCell>
                  <TableCell>{medication.medication}</TableCell>
                  <TableCell>{medication.dosage}</TableCell>
                  <TableCell>{medication.instructions}</TableCell>
                  <TableCell>{new Date(medication.due_time).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Administer
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