'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';

interface Patient {
  patient_id: number;
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  address: string;
  allergies: string;
  is_active: boolean;
  created_at: string;
}

interface MedicalRecord {
  history_id: number;
  patient_id: number;
  technician_id: number;
  record_date: string;
  notes: string;
  created_at: string;
  technician: {
    full_name: string;
  };
}

export default function PatientDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/patients/${params.id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch patient details');
        }

        setPatient(data.patient);
        setMedicalRecords(data.medicalRecords);
      } catch (error) {
        toast({
          title: 'Error',
          description: error instanceof Error ? error.message : 'Failed to fetch patient details',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [params.id, toast]);

  const handleDeactivate = async () => {
    try {
      const response = await fetch(`/api/patients/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_active: false }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to deactivate patient');
      }

      toast({
        title: 'Success',
        description: 'Patient deactivated successfully',
      });

      setPatient((prev) => prev ? { ...prev, is_active: false } : null);
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to deactivate patient',
        variant: 'destructive',
      });
    }
  };

  const handleReactivate = async () => {
    try {
      const response = await fetch(`/api/patients/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_active: true }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reactivate patient');
      }

      toast({
        title: 'Success',
        description: 'Patient reactivated successfully',
      });

      setPatient((prev) => prev ? { ...prev, is_active: true } : null);
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to reactivate patient',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            Loading...
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="flex items-center justify-center h-64">
            Patient not found
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Patient Information</CardTitle>
            <div className="flex gap-2">
              {patient.is_active ? (
                <Button variant="destructive" onClick={handleDeactivate}>
                  Deactivate Patient
                </Button>
              ) : (
                <Button onClick={handleReactivate}>
                  Reactivate Patient
                </Button>
              )}
              <Button variant="outline" onClick={() => router.back()}>
                Back to List
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Full Name</dt>
                    <dd>{patient.full_name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Date of Birth</dt>
                    <dd>{format(new Date(patient.date_of_birth), 'MMMM d, yyyy')}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Gender</dt>
                    <dd>{patient.gender}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Phone Number</dt>
                    <dd>{patient.phone_number}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Address</dt>
                    <dd>{patient.address}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Allergies</dt>
                    <dd>{patient.allergies || 'None'}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-semibold mb-2">System Information</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Patient ID</dt>
                    <dd>{patient.patient_id}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Status</dt>
                    <dd>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          patient.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {patient.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Registration Date</dt>
                    <dd>{format(new Date(patient.created_at), 'MMMM d, yyyy')}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
          </CardHeader>
          <CardContent>
            {medicalRecords.length === 0 ? (
              <p className="text-center text-muted-foreground">No medical records found</p>
            ) : (
              <div className="space-y-4">
                {medicalRecords.map((record) => (
                  <div
                    key={record.history_id}
                    className="border rounded-lg p-4 space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">
                          {record.technician.full_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(record.record_date), 'MMMM d, yyyy')}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Notes</h4>
                      <p className="text-sm">{record.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 