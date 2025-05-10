import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminUser = await prisma.users.create({
    data: {
      username: 'admin',
      password_hash: await bcryptjs.hash('admin123', 10),
      full_name: 'System Administrator',
      role: 'ADMIN',
      is_active: true,
    },
  });

  console.log('Created admin user:', adminUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });