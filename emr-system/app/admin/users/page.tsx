import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import DepartmentStats from './department-stats';

export default async function UsersPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/signin');
  }

  const departments = [
    { role: 'DOCTOR', label: 'Doctors' },
    { role: 'NURSE', label: 'Nurses' },
    { role: 'LAB_TECHNICIAN', label: 'Lab Technicians' },
    { role: 'RECORDS_OFFICER', label: 'Records Officers' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Link
          href="/admin/users/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add New User
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept) => (
          <DepartmentStats
            key={dept.role}
            department={dept.role}
            label={dept.label}
          />
        ))}
      </div>
    </div>
  );
} 