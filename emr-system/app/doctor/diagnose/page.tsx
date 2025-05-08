import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import DiagnoseForm from '../../../components/DiagnoseForm';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function DiagnosePage({ searchParams }: { searchParams: { patientId?: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'doctor') {
    redirect('/auth/signin');
  }

  let patient = null;
  if (searchParams.patientId) {
    patient = await prisma.patients.findUnique({
      where: { patient_id: parseInt(searchParams.patientId) },
      select: { patient_id: true, full_name: true, phone_number: true },
    });
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Diagnose Patient</h2>
      <DiagnoseForm patient={patient} />
    </div>
  );
}