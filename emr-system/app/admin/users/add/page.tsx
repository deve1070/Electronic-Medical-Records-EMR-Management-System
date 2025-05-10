import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import AddUserForm from '../add-user-form';

export default async function AddUserPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/signin');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New User</h1>
      <AddUserForm />
    </div>
  );
} 