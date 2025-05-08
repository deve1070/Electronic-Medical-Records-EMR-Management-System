import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import LabOrders from '../../../components/LabOrders';

export default async function LabOrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'lab_tech') {
    redirect('/auth/signin');
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Pending Lab Orders</h2>
      <LabOrders />
    </div>
  );
}