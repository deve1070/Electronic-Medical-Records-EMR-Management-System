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
        user_id: parseInt(session.user.id)
      }
    });
    console.log('Found doctor:', doctor);

    if (!doctor) {
      console.log('Doctor not found for user:', session.user.id);
      return new NextResponse('Doctor not found', { status: 404 });
    }

    // Get patients who have cases today but no diagnoses or have pending lab tests
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    const pendingPatients = await prisma.patients.findMany({
      where: {
        OR: [
          // Patients with cases today but no diagnoses
          {
            Cases: {
              some: {
                doctor_id: doctor.doctor_id,
                created_at: {
                  gte: startOfDay,
                  lt: endOfDay,
                },
              },
            },
            Diagnoses: {
              none: {
                doctor_id: doctor.doctor_id,
                created_at: {
                  gte: startOfDay,
                },
              },
            },
          },
          // Patients with pending lab tests
          {
            LabOrders: {
              some: {
                doctor_id: doctor.doctor_id,
                status: 'PENDING',
                created_at: {
                  gte: startOfDay,
                },
              },
            },
          },
        ],
      },
      select: {
        patient_id: true,
        full_name: true,
        date_of_birth: true,
        gender: true,
        phone_number: true,
        created_at: true,
        LabOrders: {
          where: {
            status: 'PENDING',
            created_at: {
              gte: startOfDay,
            },
          },
          select: {
            test_type: true,
            created_at: true,
          },
        },
      },
      orderBy: {
        created_at: 'asc',
      },
    });
    console.log('Found pending patients:', pendingPatients.length);

    return NextResponse.json(pendingPatients);
  } catch (error) {
    console.error('Detailed error in pending diagnoses:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 