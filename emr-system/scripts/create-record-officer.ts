import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function createRecordOfficer() {
  try {
    // Create record officer user
    const recordOfficer = await prisma.users.create({
      data: {
        username: 'record.officer',
        password_hash: await bcryptjs.hash('Record@123', 10),
        full_name: 'Record Officer',
        role: 'RECORD_OFFICER',
        gender: 'FEMALE',
        is_active: true
      }
    });

    console.log('Record Officer created successfully:');
    console.log('Username:', recordOfficer.username);
    console.log('Password: Record@123');
    console.log('Role:', recordOfficer.role);
  } catch (error) {
    console.error('Error creating record officer:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createRecordOfficer(); 