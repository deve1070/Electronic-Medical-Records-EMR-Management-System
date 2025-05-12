'use client';

import { useState } from 'react';
import { Patient, MedicalHistory, LabResults, Diagnoses, Users } from '@prisma/client';

interface PatientWithDetails extends Patient {
  MedicalHistory: (MedicalHistory & { technician: { full_name: string } })[];
  LabResults: (LabResults & { technician: { full_name: string } })[];
  Diagnoses: (Diagnoses & { disease: { disease_name: string } })[];
}

interface Props {
  patient: PatientWithDetails;
  session: { user: { role: string } };
}

export default function PatientHistory({ patient, session }: Props) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleActivate = async () => {
    try {
      const res = await fetch(`/api/patient/${patient.patient_id}/activate`, {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error('Failed to activate patient');
      }
      setSuccess('Patient activated successfully');
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      setError('Error activating patient');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{patient.full_name}</h3>
      <p><strong>Phone:</strong> {patient.phone_number}</p>
      <p><strong>DOB:</strong> {new Date(patient.date_of_birth).toLocaleDateString()}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Address:</strong> {patient.address}</p>
      <p><strong>Allergies:</strong> {patient.allergies || 'None'}</p>
      <p><strong>Status:</strong> {patient.is_active ? 'Active' : 'Inactive'}</p>
      {session.user.role === 'RECORD_OFFICER' && !patient.is_active && (
        <button
          onClick={handleActivate}
          className="mt-4 bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
        >
          Activate Patient
        </button>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}

      <h4 className="text-lg font-semibold mt-6 mb-2">Medical History</h4>
      {patient.MedicalHistory.length > 0 ? (
        <ul className="list-disc pl-5">
          {patient.MedicalHistory.map((history) => (
            <li key={history.history_id} className="mb-2">
              <strong>{new Date(history.record_date).toLocaleDateString()}</strong> - {history.description} (by {history.technician.full_name})
            </li>
          ))}
        </ul>
      ) : (
        <p>No medical history available.</p>
      )}

      <h4 className="text-lg font-semibold mt-6 mb-2">Lab Results</h4>
      {patient.LabResults.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Test Date</th>
              <th className="p-2 text-left">Test Type</th>
              <th className="p-2 text-left">Result</th>
              <th className="p-2 text-left">Unit</th>
              <th className="p-2 text-left">Technician</th>
            </tr>
          </thead>
          <tbody>
            {patient.LabResults.map((result) => (
              <tr key={result.result_id} className="border-b">
                <td className="p-2">{new Date(result.test_date).toLocaleDateString()}</td>
                <td className="p-2">{result.test_type}</td>
                <td className="p-2">{result.result_value}</td>
                <td className="p-2">{result.unit}</td>
                <td className="p-2">{result.technician.full_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No lab results available.</p>
      )}

      <h4 className="text-lg font-semibold mt-6 mb-2">Diagnoses</h4>
      {patient.Diagnoses.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Diagnosis Date</th>
              <th className="p-2 text-left">Disease</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Recovery Date</th>
            </tr>
          </thead>
          <tbody>
            {patient.Diagnoses.map((diagnosis) => (
              <tr key={diagnosis.diagnosis_id} className="border-b">
                <td className="p-2">{new Date(diagnosis.diagnosis_date).toLocaleDateString()}</td>
                <td className="p-2">{diagnosis.disease.disease_name}</td>
                <td className="p-2">{diagnosis.status}</td>
                <td className="p-2">
                  {diagnosis.recovery_date ? new Date(diagnosis.recovery_date).toLocaleDateString() : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No diagnoses available.</p>
      )}
    </div>
  );
}