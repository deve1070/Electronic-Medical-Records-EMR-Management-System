import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    console.log('Stats API called');
    
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      console.log('Unauthorized access attempt');
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    console.log('Requested role:', role);

    if (!role) {
      console.log('Missing role parameter');
      return NextResponse.json(
        { message: 'Role parameter is required' },
        { status: 400 }
      );
    }

    // Get all users for the specified role
    const users = await prisma.users.findMany({
      where: {
        role: role,
      },
      select: {
        user_id: true,
        username: true,
        full_name: true,
        role: true,
        is_active: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    console.log(`Found ${users.length} users for role ${role}`);

    // Calculate statistics
    const total = users.length;
    const active = users.filter(user => user.is_active).length;
    const inactive = users.filter(user => !user.is_active).length;

    const response = {
      total,
      active,
      inactive,
      users: users.slice(0, 5), // Return only the 5 most recent users
    };

    console.log('Sending response:', response);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in stats API:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 