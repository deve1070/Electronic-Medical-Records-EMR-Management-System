import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function NursePatientsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'NURSE') {
    redirect('/auth/signin');
  }

  const patients = await prisma.patients.findMany({
    include: {
      Cases: {
        include: {
          doctor: {
            include: {
              user: {
                select: {
                  full_name: true
                }
              }
            }
          }
        },
        orderBy: {
          created_at: 'desc'
        }
      },
      Diagnoses: {
        include: {
          disease: true
        },
        orderBy: {
          created_at: 'desc'
        },
        take: 1
      }
    },
    orderBy: {
      full_name: 'asc'
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <Link
          href="/nurse/vitals"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Record Vital Signs
        </Link>
      </div>

      <div className="grid gap-6">
        {patients.map((patient) => (
          <div key={patient.patient_id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{patient.full_name}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Date of Birth</p>
                    <p>{new Date(patient.date_of_birth).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Gender</p>
                    <p>{patient.gender}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p>{patient.phone_number}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Address</p>
                    <p>{patient.address}</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link
                  href={`/nurse/patients/${patient.patient_id}/vitals`}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Record Vitals
                </Link>
                <Link
                  href={`/nurse/patients/${patient.patient_id}/history`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View History
                </Link>
              </div>
            </div>

            {patient.Diagnoses && patient.Diagnoses.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Latest Diagnosis</h3>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm">
                    <span className="font-medium">Disease:</span>{' '}
                    {patient.Diagnoses[0].disease.disease_name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Severity:</span>{' '}
                    {patient.Diagnoses[0].severity}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Notes:</span>{' '}
                    {patient.Diagnoses[0].notes}
                  </p>
                </div>
              </div>
            )}

            {patient.Cases && patient.Cases.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Recent Cases</h3>
                <div className="space-y-2">
                  {patient.Cases.map((case_) => (
                    <div key={case_.case_id} className="bg-gray-50 p-3 rounded">
                      <p className="text-sm">
                        <span className="font-medium">Status:</span> {case_.status}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Priority:</span> {case_.priority}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Doctor:</span>{' '}
                        {case_.doctor.user.full_name}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Created:</span>{' '}
                        {new Date(case_.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 