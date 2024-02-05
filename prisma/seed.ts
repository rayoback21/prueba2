import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.construction.upsert({
    where: { projectName: 'CompanyRB' },
    update: {},
    create: {
          projectName: 'CompanyRB',
      information: 'Industrial park',
      startDate:
        "Simón Bolívar 1-62 y Manuel Vega",
      finalDate: "Mall of river 10 of Febrary",
      countLastSee:12,  
      extinct: false,
    },
  });

    const post2 = await prisma.construction.upsert({
    where: { projectName: 'CompanyBR1' },
    update: {},
    create: {
          projectName: 'CompanyBR1',
      information: 'Mall del Río facilities',
      startDate:
        "Calderon Park 21 of September",
     finalDate: "Mall of river 10 of Febrary",
      countLastSee:5,  
      extinct: false,
    },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });   