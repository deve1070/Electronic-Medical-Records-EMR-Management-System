import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface RecoveryRecord {
  diagnosis_date: Date;
  recovery_date: Date;
}

interface Disease {
  disease_id: number;
  disease_name: string;
  description: string | null;
  icd_code: string | null;
  created_at: Date;
  updated_at: Date;
  RecoveryRecords: RecoveryRecord[];
}

export async function GET() {
  try {
    const diseases = await prisma.diseases.findMany({
      include: {
        RecoveryRecords: {
          select: {
            diagnosis_date: true,
            recovery_date: true,
          },
        },
      },
    }) as Disease[];

    const recoveryTimes = diseases.map((disease) => {
      const validRecords = disease.RecoveryRecords.filter(
        (r) => r.diagnosis_date && r.recovery_date
      );

      if (validRecords.length === 0) {
        return {
          diseaseName: disease.disease_name,
          averageRecoveryTime: 0,
          totalCases: 0
        };
      }

      const totalDays = validRecords.reduce((sum: number, r: RecoveryRecord) => {
        const diagnosisDate = new Date(r.diagnosis_date);
        const recoveryDate = new Date(r.recovery_date);
        const days = Math.round(
          (recoveryDate.getTime() - diagnosisDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        return sum + days;
      }, 0);

      const averageDays = totalDays / validRecords.length;

      return {
        diseaseName: disease.disease_name,
        averageRecoveryTime: averageDays,
        totalCases: validRecords.length
      };
    });

    return NextResponse.json(recoveryTimes);
  } catch (error) {
    console.error('Error calculating recovery times:', error);
    return NextResponse.json(
      { error: 'Failed to calculate recovery times' },
      { status: 500 }
    );
  }
} 