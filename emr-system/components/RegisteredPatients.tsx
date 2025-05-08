'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Patient {
  patient_id: number;
  full_name: string;
  phone_number: string;
  is_active: boolean;
}

export default function RegisteredPatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch('/api/patient/registered');
        if (!res.ok) {
          throw new Error('Failed to fetch patients');
        }
        const data = await res.json();
        setPatients(data);
      } catch (err) {
        setError('Error fetching patients');
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {patients.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.patient_id} className="border-b">
                <td className="p-2">{patient.full_name}</td>
                <td className="p-2">{patient.phone_number}</td>
                <td className="p-2">{patient.is_active ? 'Active' : 'Inactive'}</td>
                <td className="p-2">
                  <Link
                    href={`/patients/${patient.patient_id}`}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    View
                  </Link>
                  <Link
                    href={`/doctor/diagnose?patientId=${patient.patient_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Diagnose
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No registered patients.</p>
      )}
    </div>
  );
}