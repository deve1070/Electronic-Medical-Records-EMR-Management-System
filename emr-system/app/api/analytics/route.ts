import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface DoctorCase {
  doctor_id: number;
  _count: {
    case_id: number;
  };
}

// Get full medical history of a specific patient
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const patientId = searchParams.get('patientId');
  const query = searchParams.get('query');

  if (!patientId) {
    return NextResponse.json({ error: 'Patient ID is required' }, { status: 400 });
  }

  try {
    switch (query) {
      case 'medical-history':
        const medicalHistory = await prisma.medicalHistory.findMany({
          where: { patient_id: parseInt(patientId) },
          include: {
            patient: true,
            technician: true,
          },
          orderBy: { record_date: 'desc' },
        });
        return NextResponse.json(medicalHistory);

      case 'positive-tests':
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const diseaseName = searchParams.get('diseaseName');

        if (!startDate || !endDate || !diseaseName) {
          return NextResponse.json(
            { error: 'Start date, end date, and disease name are required' },
            { status: 400 }
          );
        }

        const positiveTests = await prisma.diagnoses.findMany({
          where: {
            disease: {
              disease_name: diseaseName,
            },
            diagnosis_date: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
            status: 'positive',
          },
          include: {
            patient: true,
            disease: true,
          },
        });
        return NextResponse.json(positiveTests);

      case 'recovery-time':
        const recoveryTime = await prisma.diagnoses.groupBy({
          by: ['disease_id'],
          _avg: {
            recovery_time: {
              // Calculate days between diagnosis and recovery
              select: {
                days: {
                  // This is a simplified calculation
                  // In a real system, you'd want to use proper date arithmetic
                  select: {
                    days: {
                      // This is a placeholder for the actual calculation
                      // You'd need to implement proper date arithmetic here
                      select: {
                        days: {
                          // This would be the actual calculation
                          // For example: recovery_date - diagnosis_date
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          where: {
            recovery_date: { not: null },
          },
        });
        return NextResponse.json(recoveryTime);

      case 'doctor-cases':
        const year = searchParams.get('year');
        if (!year) {
          return NextResponse.json({ error: 'Year is required' }, { status: 400 });
        }

        const doctorCases = await prisma.cases.groupBy({
          by: ['doctor_id'],
          _count: {
            case_id: true,
          },
          where: {
            status: 'completed',
            case_date: {
              gte: new Date(`${year}-01-01`),
              lte: new Date(`${year}-12-31`),
            },
          },
          orderBy: {
            _count: {
              case_id: 'desc',
            },
          },
          take: 10,
        });

        // Get doctor details
        const doctorDetails = await Promise.all(
          doctorCases.map(async (dc: DoctorCase) => {
            const doctor = await prisma.doctors.findUnique({
              where: { doctor_id: dc.doctor_id },
              include: { user: true },
            });
            return {
              ...dc,
              doctor_name: doctor?.user.full_name,
              specialty: doctor?.specialty,
            };
          })
        );

        return NextResponse.json(doctorDetails);

      default:
        return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }
  } catch (error) {
    console.error('Analytics query error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 