import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import DiagnosisForm from './diagnosis-form';

export default async function PatientDiagnosisPage({
  params
}: {
  params: { patientId: string }
}) {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== 'DOCTOR') {
    redirect('/auth/signin');
  }

  // Get doctor's information
  const doctor = await prisma.doctors.findFirst({
    where: {
      user_id: parseInt(session.user.id)
    }
  });

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Doctor profile not found. Please contact administrator.
        </div>
      </div>
    );
  }

  // Get patient information
  const patient = await prisma.patients.findUnique({
    where: {
      patient_id: parseInt(params.patientId)
    }
  });

  if (!patient) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Patient not found.
        </div>
      </div>
    );
  }

  // Get patient's medical history
  const medicalHistory = await prisma.medicalHistory.findMany({
    where: {
      patient_id: patient.patient_id
    },
    orderBy: {
      record_date: 'desc'
    }
  });

  // Get patient's diagnoses
  const diagnoses = await prisma.diagnoses.findMany({
    where: {
      patient_id: patient.patient_id
    },
    include: {
      disease: true,
      doctor: {
        include: {
          user: true
        }
      }
    },
    orderBy: {
      created_at: 'desc'
    }
  });

  // Get patient's lab results
  const labResults = await prisma.labResults.findMany({
    where: {
      patient_id: patient.patient_id
    },
    include: {
      order: true,
      technician: {
        select: {
          full_name: true,
          role: true
        }
      }
    },
    orderBy: {
      created_at: 'desc'
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Patient Diagnosis</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="font-medium">{patient.full_name}</p>
            </div>
            <div>
              <p className="text-gray-600">Age</p>
              <p className="font-medium">
                {new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear()} years
              </p>
            </div>
            <div>
              <p className="text-gray-600">Gender</p>
              <p className="font-medium">{patient.gender}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="font-medium">{patient.phone_number}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Medical History</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            {medicalHistory.length > 0 ? (
              <div className="space-y-4">
                {medicalHistory.map((record) => (
                  <div key={record.history_id} className="border-b pb-4">
                    <p className="text-gray-600">{new Date(record.record_date).toLocaleDateString()}</p>
                    <p className="mt-1">{record.notes}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No medical history available.</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Previous Diagnoses</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            {diagnoses.length > 0 ? (
              <div className="space-y-4">
                {diagnoses.map((diagnosis) => (
                  <div key={diagnosis.diagnosis_id} className="border-b pb-4">
                    <p className="font-medium">{diagnosis.disease.disease_name}</p>
                    <p className="text-gray-600">
                      Diagnosed by Dr. {diagnosis.doctor.user.full_name} on{' '}
                      {new Date(diagnosis.created_at).toLocaleDateString()}
                    </p>
                    <p className="mt-1">{diagnosis.notes}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No previous diagnoses available.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Lab Results</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {labResults.length > 0 ? (
            <div className="space-y-4">
              {labResults.map((result) => (
                <div key={result.result_id} className="border-b pb-4">
                  <p className="font-medium">{result.order.test_type}</p>
                  <p className="text-gray-600">
                    Tested by {result.technician.full_name} on{' '}
                    {new Date(result.created_at).toLocaleDateString()}
                  </p>
                  <p className="mt-1">{result.result_data}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No lab results available.</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">New Diagnosis</h2>
        <DiagnosisForm patientId={patient.patient_id} doctorId={doctor.doctor_id} />
      </div>
    </div>
  );
} 