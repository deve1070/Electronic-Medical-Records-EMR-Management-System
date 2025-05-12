import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
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

  // Get doctor's patients
  const patients = await prisma.patients.findMany({
    where: {
      Cases: {
        some: {
          doctor_id: doctor.doctor_id
        }
      }
    },
    include: {
      Cases: {
        where: {
          doctor_id: doctor.doctor_id
        },
        orderBy: {
          created_at: 'desc'
        }
      }
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Patients</h1>
      <div className="grid gap-6">
        {patients.map((patient) => (
          <div key={patient.patient_id} className="bg-white rounded-lg shadow p-6">
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