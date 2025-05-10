'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';

export default function NewPrescriptionPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    patientId: '',
    medication: '',
    dosage: '',
    instructions: ''
  });

  if (session?.user?.role !== 'DOCTOR') {
    router.push('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/prescriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create prescription');
      }

      router.push('/doctor/prescriptions');
    } catch (err) {
      setError('Error creating prescription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>New Prescription</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <Label htmlFor="patientId">Patient ID</Label>
              <Input
                id="patientId"
                type="text"
                value={formData.patientId}
                onChange={(e) => setFormData(prev => ({ ...prev, patientId: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="medication">Medication</Label>
              <Input
                id="medication"
                type="text"
                value={formData.medication}
                onChange={(e) => setFormData(prev => ({ ...prev, medication: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                type="text"
                value={formData.dosage}
                onChange={(e) => setFormData(prev => ({ ...prev, dosage: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea
                id="instructions"
                value={formData.instructions}
                onChange={(e) => setFormData(prev => ({ ...prev, instructions: e.target.value }))}
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Prescription'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 