import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import LabResultForm from './LabResultForm';

type OrderWithDetails = {
  order_id: number;
  test_type: string;
  priority: string;
  notes?: string | null;
  patient: { full_name: string };
  doctor: { user: { full_name: string } };
};

export default async function LabOrderPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'LAB_TECHNICIAN') {
    redirect('/unauthorized');
  }

  const order = await prisma.labOrders.findUnique({
    where: {
      order_id: parseInt(params.id)
    },
    include: {
      patient: true,
      doctor: {
        include: {
          user: true
        }
      }
    }
  }) as unknown as OrderWithDetails;

  if (!order) {
    redirect('/lab');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Process Lab Order</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Patient</p>
              <p className="font-medium">{order.patient.full_name}</p>
            </div>
            <div>
              <p className="text-gray-600">Doctor</p>
              <p className="font-medium">{order.doctor.user.full_name}</p>
            </div>
            <div>
              <p className="text-gray-600">Test Type</p>
              <p className="font-medium">{order.test_type}</p>
            </div>
            <div>
              <p className="text-gray-600">Priority</p>
              <p className="font-medium">{order.priority}</p>
            </div>
            {order.notes && (
              <div className="col-span-2">
                <p className="text-gray-600">Notes</p>
                <p className="font-medium">{order.notes}</p>
              </div>
            )}
          </div>
        </div>

        <LabResultForm order={{
          ...order,
          notes: order.notes ?? undefined
        }} />
      </div>
    </div>
  );
} 