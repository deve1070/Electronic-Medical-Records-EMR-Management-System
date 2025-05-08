import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import RegisteredPatients from '../../../components/RegisteredPatients';

export default async function RegisteredPatientsPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'doctor') {
    redirect('/auth/signin');
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Registered Patients</h2>
      <RegisteredPatients />
    </div>
  );
}