import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'DOCTOR') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { patientId, doctorId, diagnosisId, tests } = await request.json();

    // Validate required fields
    if (!patientId || !doctorId || !diagnosisId || !tests || !Array.isArray(tests)) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify doctor exists and matches the session user
    const doctor = await prisma.doctors.findFirst({
      where: {
        doctor_id: doctorId,
        user_id: parseInt(session.user.id)
      }
    });

    if (!doctor) {
      console.log('Doctor verification failed:', {
        doctorId,
        userId: session.user.id,
        role: session.user.role
      });
      return NextResponse.json(
        { error: 'Doctor not found or unauthorized' },
        { status: 404 }
      );
    }

    // Verify patient exists
    const patient = await prisma.patients.findUnique({
      where: {
        patient_id: patientId
      }
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Verify diagnosis exists and belongs to the patient
    const diagnosis = await prisma.diagnoses.findFirst({
      where: {
        diagnosis_id: diagnosisId,
        patient_id: patientId,
        doctor_id: doctorId
      }
    });

    if (!diagnosis) {
      return NextResponse.json(
        { error: 'Diagnosis not found or unauthorized' },
        { status: 404 }
      );
    }

    // Create lab orders for each test
    const labOrders = await Promise.all(
      tests.map(async (testType) => {
        return prisma.labOrders.create({
          data: {
            patient_id: patientId,
            doctor_id: doctorId,
            ordered_by: parseInt(session.user.id),
            test_type: testType,
            status: 'PENDING',
            priority: 'NORMAL'
          }
        });
      })
    );

    return NextResponse.json(labOrders);
  } catch (error) {
    console.error('Error creating lab orders:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 