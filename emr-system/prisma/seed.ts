import prisma from '../lib/prisma.js';
import * as bcrypt from 'bcrypt';

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  await prisma.users.createMany({
    data: [
      {
        username: 'dr_john',
        full_name: 'Dr. John Doe',
        role: 'doctor',
        password_hash: passwordHash,
      },
      {
        username: 'admin_mary',
        full_name: 'Mary Smith',
        role: 'admin',
        password_hash: passwordHash,
      },
      {
        username: 'record_alice',
        full_name: 'Alice Johnson',
        role: 'record_officer',
        password_hash: passwordHash,
      },
      {
        username: 'lab_bob',
        full_name: 'Bob Brown',
        role: 'lab_tech',
        password_hash: passwordHash,
      },
    ],
  });

  await prisma.patients.createMany({
    data: [
      {
        full_name: 'Jane Roe',
        date_of_birth: new Date('1990-05-15'),
        gender: 'female',
        phone_number: '1234567890',
        address: '123 Main St',
      },
      {
        full_name: 'Tom Wilson',
        date_of_birth: new Date('1985-08-22'),
        gender: 'male',
        phone_number: '0987654321',
        address: '456 Oak Ave',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });