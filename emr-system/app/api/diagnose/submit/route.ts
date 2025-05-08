import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { z } from 'zod';

const prisma = new PrismaClient();

const diagnosisSchema = z.object({
  patientId: z.number().int().positive(),
  diseaseName: z.string().min(1),
  diagnosisDate: z.string().datetime(),
  status: z.enum(['Active', 'Recovered']),
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'doctor') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { patientId, diseaseName, diagnosisDate, status } = diagnosisSchema.parse(body);

    const patient = await prisma.patients.findUnique({ where: { patient_id: patientId } });
    if (!patient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
    }

    let disease = await prisma.diseases.findUnique({ where: { disease_name: diseaseName } });
    if (!disease) {
      disease = await prisma.diseases.create({
        data: { disease_name: diseaseName, description: '' },
      });
    }

    const diagnosis = await prisma.diagnoses.create({
      data: {
        patient_id: patientId,
        disease_id: disease.disease_id,
        diagnosis_date: new Date(diagnosisDate),
        status,
      },
    });

    const doctor = await prisma.doctors.findFirst({ where: { user_id: parseInt(session.user.id) } });
    if (doctor) {
      await prisma.cases.create({
        data: {
          patient_id: patientId,
          doctor_id: doctor.doctor_id,
          diagnosis_id: diagnosis.diagnosis_id,
          case_date: new Date(),
          status: status === 'Recovered' ? 'Closed' : 'Open',
        },
      });
    }

    await prisma.accessLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        patient_id: patientId,
        action: 'create',
        resource_type: 'Diagnoses',
        resource_id: diagnosis.diagnosis_id,
      },
    });

    return NextResponse.json(diagnosis, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit diagnosis' }, { status: 500 });
  }
}