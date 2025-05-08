'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Patient {
  patient_id: number;
  full_name: string;
  phone_number: string;
  is_active: boolean;
}

export default function PatientSearch() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`/api/patient/search?phone=${encodeURIComponent(phoneNumber)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch patients');
      }
      const data = await res.json();
      setPatients(data);
    } catch (err) {
      setError('Error searching patients');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number (e.g., 555-0101)"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {patients.length > 0 ? (
        <ul className="space-y-2">
          {patients.map((patient) => (
            <li key={patient.patient_id} className="p-2 border-b">
              <Link
                href={`/patients/${patient.patient_id}`}
                className="text-blue-600 hover:underline"
              >
                {patient.full_name} - {patient.phone_number} (
                {patient.is_active ? 'Active' : 'Inactive'})
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
}