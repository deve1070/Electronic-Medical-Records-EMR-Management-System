'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface Diagnosis {
  patient: { full_name: string; phone_number: string };
  disease: { disease_name: string };
  diagnosis_date: string;
}

export default function DiseaseReportForm() {
  const [diseaseName, setDiseaseName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [results, setResults] = useState<Diagnosis[]>([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(
        `/api/patients/disease?disease=${encodeURIComponent(diseaseName)}&startDate=${startDate}&endDate=${endDate}`
      );
      if (!res.ok) {
        throw new Error('Failed to fetch report');
      }
      const data = await res.json() as Diagnosis[];
      setResults(data);
    } catch (err) {
      setError('Error fetching report');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="diseaseName" className="block text-sm font-medium text-gray-700">
              Disease Name
            </label>
            <Input
              id="diseaseName"
              type="text"
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <Input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Generate Report
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {results.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Patient Name</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Disease</th>
              <th className="p-2 text-left">Diagnosis Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{result.patient.full_name}</td>
                <td className="p-2">{result.patient.phone_number}</td>
                <td className="p-2">{result.disease.disease_name}</td>
                <td className="p-2">{new Date(result.diagnosis_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
} 