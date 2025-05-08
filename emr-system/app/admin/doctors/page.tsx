import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function TopDoctorsPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') {
    redirect('/auth/signin');
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Top Doctors by Closed Cases</h2>
      <TopDoctorsForm />
    </div>
  );
}

'use client';

import { useState } from 'react';

interface Doctor {
  full_name: string;
  specialty: string;
  closed_cases: number;
}

function TopDoctorsForm() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`/api/doctors/closed-cases?year=${year}`);
      if (!res.ok) {
        throw new Error('Failed to fetch report');
      }
      const data = await res.json();
      setDoctors(data);
    } catch (err) {
      setError('Error fetching report');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Generate Report
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {doctors.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Doctor Name</th>
              <th className="p-2 text-left">Specialty</th>
              <th className="p-2 text-left">Closed Cases</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{doctor.full_name}</td>
                <td className="p-2">{doctor.specialty}</td>
                <td className="p-2">{doctor.closed_cases}</td>
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