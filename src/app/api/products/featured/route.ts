import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const featuredProducts = await db.product.findMany({
      where: {
        featured: true,
        status: 'active'
      },
      include: {
        category: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 8
    })

    return NextResponse.json(featuredProducts)
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch featured products' },
      { status: 500 }
    )
  }
}