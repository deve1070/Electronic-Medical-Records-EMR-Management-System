import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DiseaseReportPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') {
    redirect('/auth/signin');
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Disease Report</h2>
      <DiseaseReportForm />
    </div>
  );
}

'use client';

import { useState } from 'react';

interface Diagnosis {
  patient: { full_name: string; phone_number: string };
  disease: { disease_name: string };
  diagnosis_date: string;
}

function DiseaseReportForm() {
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
      const data = await res.json();
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
            <input
              id="diseaseName"
              type="text"
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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