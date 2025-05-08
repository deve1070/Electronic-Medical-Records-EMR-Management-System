import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import LabUploadForm from '../../../components/LabUploadForm';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function LabUploadPage({ searchParams }: { searchParams: { orderId?: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'lab_tech') {
    redirect('/auth/signin');
  }

  let order = null;
  if (searchParams.orderId) {
    order = await prisma.labOrders.findUnique({
      where: { order_id: parseInt(searchParams.orderId) },
      include: { patient: true },
    });
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Upload Lab Result</h2>
      <LabUploadForm order={order} />
    </div>
  );
}