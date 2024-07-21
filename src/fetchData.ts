import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
  const { data } = await axios.get('https://dummyjson.com/products');

  for (const product of data.products) {
    await prisma.product.create({
      data: {
        title: product.title,
        category: product.category,
        price: product.price,
        rating: product.rating,
        image: product.images,
      },
    });

    await prisma.category.upsert({
      where: { name: product.category },
      update: {},
      create: { name: product.category },
    });
  }
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
