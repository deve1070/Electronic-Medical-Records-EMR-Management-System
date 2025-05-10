import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session || session.user.role !== 'DOCTOR') {
      console.log('Unauthorized access attempt');
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
    console.log('Found doctor:', doctor);

    if (!doctor) {
      console.log('Doctor not found for user:', session.user.id);
      return new NextResponse('Doctor not found', { status: 404 });
    }

    const labResults = await prisma.labResults.findMany({
      where: {
        order: {
          doctor_id: doctor.doctor_id,
        },
      },
      select: {
        result_id: true,
        patient_id: true,
        patient: {
          select: {
            full_name: true,
          },
        },
        technician: {
          select: {
            full_name: true,
          },
        },
        result_data: true,
        status: true,
        is_positive: true,
        created_at: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    console.log('Found lab results:', labResults.length);

    return NextResponse.json(labResults);
  } catch (error) {
    console.error('Detailed error in lab results:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 