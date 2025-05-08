import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { z } from 'zod';

const prisma = new PrismaClient();

const patientSchema = z.object({
  fullName: z.string().min(1),
  dateOfBirth: z.string().datetime(),
  gender: z.enum(['Male', 'Female', 'Other']),
  phoneNumber: z.string().min(10),
  address: z.string().min(1),
  allergies: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'record_officer') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { fullName, dateOfBirth, gender, phoneNumber, address, allergies } = patientSchema.parse(body);

    const patient = await prisma.patients.create({
      data: {
        full_name: fullName,
        date_of_birth: new Date(dateOfBirth),
        gender,
        phone_number: phoneNumber,
        address,
        allergies,
      },
    });

    await prisma.accessLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        patient_id: patient.patient_id,
        action: 'create',
        resource_type: 'Patient',
        resource_id: patient.patient_id,
      },
    });

    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add patient' }, { status: 500 });
  }
}