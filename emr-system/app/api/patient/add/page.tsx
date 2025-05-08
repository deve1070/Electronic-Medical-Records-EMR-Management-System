import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import AddPatient from '../../../components/AddPatient';

export default async function AddPatientPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'record_officer') {
    redirect('/auth/signin');
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Patient</h2>
      <AddPatient />
    </div>
  );
}