import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'DOCTOR') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // First get the doctor's ID
    const doctor = await prisma.doctors.findFirst({
      where: {
        user: {
          user_id: parseInt(session.user.id)
        }
      }
    });

    if (!doctor) {
      return new NextResponse('Doctor not found', { status: 404 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

    // Get today's patients (cases created today)
    const todayPatients = await prisma.cases.count({
      where: {
        doctor_id: doctor.doctor_id,
        created_at: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    // Get pending diagnoses count
    const pendingDiagnoses = await prisma.patients.count({
      where: {
        Cases: {
          some: {
            doctor_id: doctor.doctor_id,
            created_at: {
              gte: today,
              lt: tomorrow,
            },
          },
        },
        Diagnoses: {
          none: {
            doctor_id: doctor.doctor_id,
            created_at: {
              gte: today,
            },
          },
        },
      },
    });

    // Get unviewed lab results count
    const labResults = await prisma.labResults.count({
      where: {
        order: {
          doctor_id: doctor.doctor_id,
        },
        status: 'COMPLETED',
        is_positive: true,
      },
    });

    return NextResponse.json({
      todayPatients,
      pendingDiagnoses,
      labResults,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 