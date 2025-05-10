import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

interface PrescriptionWithPatient {
  prescription_id: number;
  patient_id: number;
  doctor_id: number;
  created_at: Date;
  status: string;
  medication: string;
  dosage: string;
  instructions: string;
  patient: {
    full_name: string;
    date_of_birth: Date;
    gender: string;
  };
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'PHARMACIST') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get pending prescriptions using Prisma's findMany
    const prescriptions = await prisma.prescriptions.findMany({
      where: {
        status: 'PENDING',
      },
      include: {
        patient: {
          select: {
            full_name: true,
            date_of_birth: true,
            gender: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    const formattedPrescriptions = prescriptions.map(prescription => ({
      id: prescription.prescription_id,
      patientName: prescription.patient.full_name,
      patientAge: calculateAge(prescription.patient.date_of_birth),
      patientGender: prescription.patient.gender,
      doctorId: prescription.doctor_id,
      medication: prescription.medication,
      dosage: prescription.dosage,
      instructions: prescription.instructions,
      status: prescription.status,
      createdAt: prescription.created_at,
    }));

    return NextResponse.json({
      total: formattedPrescriptions.length,
      prescriptions: formattedPrescriptions,
    });
  } catch (error) {
    console.error('Error in prescriptions API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

function calculateAge(dateOfBirth: Date): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
} 