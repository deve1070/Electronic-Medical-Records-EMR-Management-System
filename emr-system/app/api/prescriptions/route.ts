import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreatePrescriptionBody {
  patient_id: string;
  medication: string;
  dosage: string;
  instructions: string;
}

interface UpdatePrescriptionBody {
  prescription_id: string;
  status: 'PENDING' | 'FILLED' | 'DISPENSED';
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'DOCTOR') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get doctor's information
    const doctor = await prisma.doctors.findFirst({
      where: {
        user_id: session.user.user_id
      }
    });

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    // Get prescriptions for this doctor
    const prescriptions = await prisma.prescriptions.findMany({
      where: {
        doctor_id: doctor.doctor_id
      },
      include: {
        patient: {
          select: {
            full_name: true,
            phone_number: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(prescriptions);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'DOCTOR') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { patientId, medication, dosage, instructions } = await request.json();

    // Validate required fields
    if (!patientId || !medication || !dosage || !instructions) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get doctor's information
    const doctor = await prisma.doctors.findFirst({
      where: {
        user_id: session.user.user_id
      }
    });

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    // Verify patient exists
    const patient = await prisma.patients.findUnique({
      where: {
        patient_id: parseInt(patientId)
      }
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Create prescription
    const prescription = await prisma.prescriptions.create({
      data: {
        patient_id: parseInt(patientId),
        doctor_id: doctor.doctor_id,
        prescribed_by: parseInt(session.user.id),
        medication,
        dosage,
        instructions,
        status: 'PENDING'
      },
      include: {
        patient: {
          select: {
            full_name: true,
            phone_number: true
          }
        }
      }
    });

    return NextResponse.json(prescription);
  } catch (error) {
    console.error('Error creating prescription:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !['PHARMACIST'].includes(session.user?.role as string)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json() as UpdatePrescriptionBody;
    const { prescription_id, status } = body;

    const prescription = await prisma.prescriptions.update({
      where: {
        prescription_id: Number(prescription_id),
      },
      data: {
        status,
      },
    });

    return NextResponse.json(prescription);
  } catch (error) {
    console.error('Error updating prescription:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 