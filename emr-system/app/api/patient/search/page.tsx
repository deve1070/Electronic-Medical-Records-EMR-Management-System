import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import PatientSearch from '../../../components/PatientSearch';

export default async function PatientSearchPage() {
  const session = await getServerSession(authOptions);
  if (!session || !['record_officer', 'doctor', 'nurse', 'admin'].includes(session.user.role)) {
    redirect('/auth/signin');
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Search Patients</h2>
      <PatientSearch />
    </div>
  );
}