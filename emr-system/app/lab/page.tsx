import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function LabTechnicianDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'LAB_TECHNICIAN') {
    redirect('/unauthorized');
  }

  // Get pending lab orders
  const pendingOrders = await prisma.labOrders.findMany({
    where: {
      status: 'PENDING'
    },
    include: {
      patient: true,
      doctor: {
        include: {
          user: true
        }
      }
    },
    orderBy: {
      created_at: 'desc'
    }
  });

  // Get completed lab results
  const completedResults = await prisma.labResults.findMany({
    where: {
      status: 'COMPLETED'
    },
    include: {
      order: {
        include: {
          patient: true
        }
      }
    },
    orderBy: {
      created_at: 'desc'
    },
    take: 5
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Lab Technician Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Orders Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Lab Orders</h2>
          {pendingOrders.length === 0 ? (
            <p className="text-gray-500">No pending lab orders</p>
          ) : (
            <div className="space-y-4">
              {pendingOrders.map((order) => (
                <div key={order.order_id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{order.test_type}</p>
                      <p className="text-sm text-gray-600">
                        Patient: {order.patient.full_name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Doctor: {order.doctor.user.full_name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Priority: {order.priority}
                      </p>
                    </div>
                    <a
                      href={`/lab/orders/${order.order_id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Process
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Results Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Lab Results</h2>
          {completedResults.length === 0 ? (
            <p className="text-gray-500">No recent lab results</p>
          ) : (
            <div className="space-y-4">
              {completedResults.map((result) => (
                <div key={result.result_id} className="border rounded-lg p-4">
                  <p className="font-medium">{result.result_data}</p>
                  <p className="text-sm text-gray-600">
                    Patient: {result.order.patient.full_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Status: {result.status}
                  </p>
                  <p className="text-sm text-gray-600">
                    Result: {result.is_positive ? 'Positive' : 'Negative'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 