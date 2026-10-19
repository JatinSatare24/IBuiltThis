import { db } from '@/db'
import { products } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getFeaturedProducts() {
    const productsData = await db.select().from(products).where(eq(products.status, 'approved'))
    return productsData
}

