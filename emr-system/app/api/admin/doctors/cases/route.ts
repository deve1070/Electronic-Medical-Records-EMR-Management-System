import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

    const doctorsWithCases = await prisma.doctors.findMany({
      where: {
        user: {
          role: 'DOCTOR',
          is_active: true
        }
      },
      select: {
        doctor_id: true,
        user: {
          select: {
            full_name: true,
            username: true
          }
        },
        Cases: {
          where: {
            status: 'CLOSED',
            created_at: {
              gte: startOfYear,
              lte: endOfYear
            }
          }
        }
      }
    });

    const doctorsStats = doctorsWithCases.map(doctor => ({
      doctorId: doctor.doctor_id,
      fullName: doctor.user.full_name,
      username: doctor.user.username,
      completedCases: doctor.Cases.length
    }));

    // Sort doctors by number of completed cases in descending order
    doctorsStats.sort((a, b) => b.completedCases - a.completedCases);

    return NextResponse.json({
      year: currentYear,
      doctors: doctorsStats
    });
  } catch (error) {
    console.error('Error fetching doctors cases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctors cases' },
      { status: 500 }
    );
  }
} 