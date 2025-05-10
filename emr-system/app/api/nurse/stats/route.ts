import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (session.user?.role !== 'NURSE') {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Fetch total patients
    const totalPatients = await prisma.patients.count();

    // Fetch active patients
    const activePatients = await prisma.patients.count({
      where: {
        is_active: true
      }
    });

    // Fetch low stock medications
    const lowStockMedications = await prisma.medications.count({
      where: {
        quantity: {
          lte: 10
        }
      }
    });

    // Fetch due medications
    const dueMedications = await prisma.prescriptions.count({
      where: {
        status: 'ACTIVE'
      }
    });

    // Mock number for pending vitals since we don't have a vitals model yet
    const pendingVitals = 5;

    return NextResponse.json({
      totalPatients,
      activePatients,
      pendingVitals,
      lowStockMedications,
      dueMedications
    });
  } catch (error) {
    console.error('Error fetching nurse dashboard stats:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 