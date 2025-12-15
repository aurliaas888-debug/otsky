import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
    // Update products with images
    const updates = await Promise.all([
      db.product.update({
        where: { slug: 'kemeja-formal-premium' },
        data: { image: '/shirt-formal.jpg' }
      }),
      db.product.update({
        where: { slug: 'dress-evening-elegant' },
        data: { image: '/dress-elegant.jpg' }
      }),
      db.product.update({
        where: { slug: 'celana-chinos-slim-fit' },
        data: { image: '/chinos.jpg' }
      }),
      db.product.update({
        where: { slug: 'blouse-wanita-modern' },
        data: { image: '/blouse.jpg' }
      }),
      db.product.update({
        where: { slug: 'hoodie-premium-cotton' },
        data: { image: '/hoodie.jpg' }
      })
    ])

    return NextResponse.json({ 
      message: 'Product images updated successfully',
      updated: updates.length
    })
  } catch (error) {
    console.error('Error updating product images:', error)
    return NextResponse.json(
      { error: 'Failed to update product images' },
      { status: 500 }
    )
  }
}