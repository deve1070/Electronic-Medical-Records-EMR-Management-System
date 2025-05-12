import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'NURSE') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get total patients
    const totalPatients = await prisma.patients.count();

    // Get active cases
    const activeCases = await prisma.cases.count({
      where: {
        status: 'ACTIVE'
      }
    });

    // Get today's appointments
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayAppointments = await prisma.cases.count({
      where: {
        created_at: {
          gte: today,
          lt: tomorrow
        }
      }
    });

    // Get patients by gender
    const patientsByGender = await prisma.patients.groupBy({
      by: ['gender'],
      _count: true
    });

    // Get patients by age group
    const patients = await prisma.patients.findMany({
      select: {
        date_of_birth: true
      }
    });

    const ageGroups = {
      '0-18': 0,
      '19-30': 0,
      '31-50': 0,
      '51+': 0
    };

    patients.forEach(patient => {
      const age = new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear();
      if (age <= 18) ageGroups['0-18']++;
      else if (age <= 30) ageGroups['19-30']++;
      else if (age <= 50) ageGroups['31-50']++;
      else ageGroups['51+']++;
    });

    return NextResponse.json({
      totalPatients,
      activeCases,
      todayAppointments,
      patientsByGender,
      patientsByAge: ageGroups
    });
  } catch (error) {
    console.error('Error fetching nurse dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    );
  }
} 