import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function DoctorPatientsPage() {
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

  // Get patients with active cases assigned to this doctor
  const cases = await prisma.cases.findMany({
    where: {
      doctor_id: doctor.doctor_id,
      status: 'ACTIVE'
    },
    include: {
      patient: true
    },
    orderBy: {
      created_at: 'desc'
    }
  });

  // Get latest diagnoses for each patient
  const patientIds = cases.map(case_ => case_.patient_id);
  const latestDiagnoses = await prisma.diagnoses.findMany({
    where: {
      patient_id: {
        in: patientIds
      }
    },
    include: {
      disease: true
    },
    orderBy: {
      created_at: 'desc'
    },
    distinct: ['patient_id']
  });

  // Create a map of patient_id to latest diagnosis
  const diagnosisMap = new Map(
    latestDiagnoses.map(diagnosis => [diagnosis.patient_id, diagnosis])
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Patients</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest Diagnosis</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cases.map((case_) => {
              const latestDiagnosis = diagnosisMap.get(case_.patient.patient_id);
              return (
                <tr key={case_.case_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {case_.patient.full_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().getFullYear() - new Date(case_.patient.date_of_birth).getFullYear()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {case_.patient.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {latestDiagnosis?.disease.disease_name || 'No diagnosis yet'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <Link
                        href={`/doctor/patients/${case_.patient.patient_id}/diagnosis`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/doctor/patients/${case_.patient.patient_id}/prescribe`}
                        className="text-green-600 hover:text-green-800"
                      >
                        Prescribe
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}