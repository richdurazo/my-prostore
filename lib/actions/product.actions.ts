'use server';
import { prisma } from '@/db/prisma';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
// import { PrismaClient } from '../generated/prisma';
import { convertToPlainObject } from '../utils';

// Get latest products
export async function getLatestProducts() {
    // const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' },
    });
    return convertToPlainObject(data);
}

// get single product by slug
export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: { slug: slug },
    });
}
