import prisma from './lib/prisma'; async function test() { console.log(await prisma.users.findMany()); } test().finally(() => prisma.$disconnect());
