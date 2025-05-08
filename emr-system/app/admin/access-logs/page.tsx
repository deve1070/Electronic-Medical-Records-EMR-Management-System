import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AccessLogsPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') {
    redirect('/auth/signin');
  }

  const logs = await prisma.accessLogs.findMany({
    include: {
      user: { select: { full_name: true } },
      patient: { select: { full_name: true } },
    },
    orderBy: { access_time: 'desc' },
    take: 100,
  });

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Access Logs</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {logs.length > 0 ? (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-left">Patient</th>
                <th className="p-2 text-left">Action</th>
                <th className="p-2 text-left">Resource</th>
                <th className="p-2 text-left">Resource ID</th>
                <th className="p-2 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.log_id} className="border-b">
                  <td className="p-2">{log.user.full_name}</td>
                  <td className="p-2">{log.patient.full_name}</td>
                  <td className="p-2">{log.action}</td>
                  <td className="p-2">{log.resource_type}</td>
                  <td className="p-2">{log.resource_id}</td>
                  <td className="p-2">{new Date(log.access_time).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No access logs found.</p>
        )}
      </div>
    </div>
  );
}