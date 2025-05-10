'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Disease {
  disease_id: number;
  disease_name: string;
  description: string | null;
  icd_code: string | null;
}

interface DiagnosisFormProps {
  patientId: number;
  doctorId: number;
}

export default function DiagnosisForm({ patientId, doctorId }: DiagnosisFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [isLoadingDiseases, setIsLoadingDiseases] = useState(true);
  const [formData, setFormData] = useState({
    diseaseId: '',
    notes: '',
    labTests: [] as string[]
  });

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await fetch('/api/diseases');
        if (!response.ok) {
          throw new Error('Failed to fetch diseases');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setDiseases(data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching diseases:', err);
        setError(err instanceof Error ? err.message : 'Failed to load diseases');
      } finally {
        setIsLoadingDiseases(false);
      }
    };

    fetchDiseases();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create diagnosis
      const diagnosisResponse = await fetch('/api/doctor/diagnoses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientId,
          doctorId,
          diseaseId: parseInt(formData.diseaseId),
          notes: formData.notes
        }),
      });

      if (!diagnosisResponse.ok) {
        const errorData = await diagnosisResponse.json();
        throw new Error(errorData.error || 'Failed to create diagnosis');
      }

      const diagnosis = await diagnosisResponse.json();

      // Create lab test orders if any
      if (formData.labTests.length > 0) {
        const labOrderResponse = await fetch('/api/doctor/lab-orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patientId,
            doctorId,
            diagnosisId: diagnosis.diagnosis_id,
            tests: formData.labTests
          }),
        });

        if (!labOrderResponse.ok) {
          const errorData = await labOrderResponse.json();
          throw new Error(errorData.error || 'Failed to create lab orders');
        }
      }

      // Refresh the data
      router.refresh();
      // Wait a moment for the data to be refreshed
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Then redirect to the doctor's dashboard
      router.push('/doctor');
    } catch (err) {
      console.error('Error submitting diagnosis:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLabTestChange = (test: string) => {
    setFormData(prev => ({
      ...prev,
      labTests: prev.labTests.includes(test)
        ? prev.labTests.filter(t => t !== test)
        : [...prev.labTests, test]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="diseaseId" className="block text-gray-700 font-medium mb-2">
          Disease
        </label>
        <select
          id="diseaseId"
          value={formData.diseaseId}
          onChange={(e) => setFormData(prev => ({ ...prev, diseaseId: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoadingDiseases}
        >
          <option value="">Select a disease</option>
          {diseases.map((disease) => (
            <option key={disease.disease_id} value={disease.disease_id}>
              {disease.disease_name}
              {disease.icd_code ? ` (${disease.icd_code})` : ''}
            </option>
          ))}
        </select>
        {isLoadingDiseases && (
          <p className="mt-1 text-sm text-gray-500">Loading diseases...</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Lab Tests
        </label>
        <div className="space-y-2">
          {['Blood Test', 'Urine Test', 'X-Ray', 'MRI', 'CT Scan'].map((test) => (
            <label key={test} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.labTests.includes(test)}
                onChange={() => handleLabTestChange(test)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{test}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting || isLoadingDiseases}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Diagnosis'}
        </button>
      </div>
    </form>
  );
} 