import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};
    if (role && role !== 'all') {
      where.role = role;
    }
    if (search) {
      where.OR = [
        { username: { contains: search } },
        { full_name: { contains: search } },
      ];
    }

    // Get users with pagination
    const [users, total] = await Promise.all([
      prisma.users.findMany({
        where,
        select: {
          user_id: true,
          username: true,
          full_name: true,
          role: true,
          is_active: true,
          last_login: true,
          created_at: true,
        },
        orderBy: {
          created_at: 'desc',
        },
        skip,
        take: limit,
      }),
      prisma.users.count({ where }),
    ]);

    return NextResponse.json({
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { username, password, full_name, role } = await request.json();

    // Validate required fields
    if (!username || !password || !full_name || !role) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUser = await prisma.users.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Username already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.users.create({
      data: {
        username,
        password_hash: hashedPassword,
        full_name,
        role,
        is_active: true,
      },
    });

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { user_id, is_active } = body;

    if (!user_id || typeof is_active !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update user status
    const user = await prisma.users.update({
      where: { user_id },
      data: { is_active },
    });

    // Create system log
    await prisma.systemLogs.create({
      data: {
        user_id: user.user_id,
        action: is_active ? 'USER_ACTIVATED' : 'USER_DEACTIVATED',
        details: `${is_active ? 'Activated' : 'Deactivated'} user: ${user.username}`,
      },
    });

    return NextResponse.json({
      message: `User ${is_active ? 'activated' : 'deactivated'} successfully`,
      user: {
        user_id: user.user_id,
        username: user.username,
        is_active: user.is_active,
      },
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
} 