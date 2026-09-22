import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: {
      slug: 'prestige-demo',
    },
    update: {},
    create: {
      name: 'Prestige Demo Restaurant',
      slug: 'prestige-demo',
      businessType:'cafe',
    },
  });

  const location = await prisma.location.create({
    data: {
      tenantId: tenant.id,
      name: 'Main Branch',
      address: 'Demo Address',
      timezone: 'Asia/Kolkata',
    },
  });

  const table = await prisma.table.create({
    data: {
      locationId: location.id,
      tableNumber: '1',
      qrToken: 'prestige-demo-table-1',
    },
  });

  const keywords = await Promise.all([
    prisma.keyword.create({
      data: {
        tenantId: tenant.id,
        name: 'Food',
      },
    }),
    prisma.keyword.create({
      data: {
        tenantId: tenant.id,
        name: 'Staff',
      },
    }),
    prisma.keyword.create({
      data: {
        tenantId: tenant.id,
        name: 'Ambience',
      },
    }),
    prisma.keyword.create({
      data: {
        tenantId: tenant.id,
        name: 'Service',
      },
    }),
  ]);

  console.log('\nPrestige development data created:\n');

  console.log('Tenant ID:', tenant.id);
  console.log('Location ID:', location.id);
  console.log('Table ID:', table.id);
  console.log('QR Token:', table.qrToken);

  console.log('\nKeywords:');
  for (const keyword of keywords) {
    console.log(`- ${keyword.name}: ${keyword.id}`);
  }
}

main()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });