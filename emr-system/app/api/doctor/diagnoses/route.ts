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

    const { patientId, doctorId, diseaseId, notes } = await request.json();

    // Validate required fields
    if (!patientId || !doctorId || !diseaseId || !notes) {
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

    // Verify disease exists
    const disease = await prisma.diseases.findUnique({
      where: {
        disease_id: diseaseId
      }
    });

    if (!disease) {
      return NextResponse.json(
        { error: 'Disease not found' },
        { status: 404 }
      );
    }

    // Create diagnosis
    const diagnosis = await prisma.diagnoses.create({
      data: {
        patient_id: patientId,
        doctor_id: doctorId,
        disease_id: diseaseId,
        condition: notes,
        notes,
        severity: 'MILD'
      }
    });

    return NextResponse.json(diagnosis);
  } catch (error) {
    console.error('Error creating diagnosis:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 