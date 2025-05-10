import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'RECORD_OFFICER') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get total patients
    const totalPatients = await prisma.patients.count();

    // Get active patients (patients with cases in the last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const activePatients = await prisma.patients.count({
      where: {
        Cases: {
          some: {
            created_at: {
              gte: thirtyDaysAgo
            }
          }
        }
      }
    });

    // Get pending lab results
    const pendingLabResults = await prisma.labOrders.count({
      where: {
        status: 'PENDING'
      }
    });

    // Get pending prescriptions
    const pendingPrescriptions = await prisma.prescriptions.count({
      where: {
        status: 'PENDING'
      }
    });

    return NextResponse.json({
      totalPatients,
      activePatients,
      pendingLabResults,
      pendingPrescriptions
    });
  } catch (error) {
    console.error('Error fetching record officer stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 