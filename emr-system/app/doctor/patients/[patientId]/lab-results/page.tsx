import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { LabResults, LabOrders, Users } from '@prisma/client';

interface LabResultWithRelations extends LabResults {
  order: LabOrders;
  technician: Pick<Users, 'full_name' | 'role'>;
}

export default async function LabResultsPage({ params }: { params: { patientId: string } }) {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== 'DOCTOR') {
    redirect('/auth/signin');
  }

  const labResults = await prisma.labResults.findMany({
    where: {
      patient_id: parseInt(params.patientId)
    },
    include: {
      order: true,
      technician: {
        select: {
          full_name: true,
          role: true
        }
      }
    },
    orderBy: {
      created_at: 'desc'
    }
  }) as LabResultWithRelations[];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Lab Results</h1>
      
      <div className="grid gap-6">
        {labResults.map((result) => (
          <div key={result.result_id} className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">Test Result #{result.result_id}</h2>
                <p className="text-gray-500">
                  Test Type: {result.order.test_type}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                result.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {result.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Technician</p>
                <p className="font-medium">{result.technician.full_name}</p>
                <p className="text-sm text-gray-500">{result.technician.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">
                  {new Date(result.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 mb-2">Result Data</p>
              <p className="whitespace-pre-wrap">{result.result_data}</p>
            </div>

            {result.is_positive && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 font-medium">Positive Result</p>
                <p className="text-red-600 text-sm mt-1">
                  This result indicates a positive finding. Please review and take appropriate action.
                </p>
              </div>
            )}
          </div>
        ))}

        {labResults.length === 0 && (
          <p className="text-gray-500 text-center py-8">No lab results found</p>
        )}
      </div>
    </div>
  );
} 