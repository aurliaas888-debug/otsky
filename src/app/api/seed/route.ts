import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
    // Create categories
    const categories = await Promise.all([
      db.category.create({
        data: {
          name: 'Kemeja Pria',
          slug: 'kemeja-pria',
          description: 'Koleksi kemeja pria modern dan stylish'
        }
      }),
      db.category.create({
        data: {
          name: 'Dress Wanita',
          slug: 'dress-wanita',
          description: 'Dress elegan untuk berbagai acara'
        }
      }),
      db.category.create({
        data: {
          name: 'Celana Pria',
          slug: 'celana-pria',
          description: 'Celana nyaman dan trendi untuk pria'
        }
      }),
      db.category.create({
        data: {
          name: 'Atasan Wanita',
          slug: 'atasan-wanita',
          description: 'Berbagai pilihan atasan fashionable'
        }
      }),
      db.category.create({
        data: {
          name: 'Jaket & Hoodie',
          slug: 'jaket-hoodie',
          description: 'Jaket dan hoodie untuk gaya casual'
        }
      })
    ])

    // Create sample products
    const products = [
      {
        name: 'Kemeja Formal Premium',
        slug: 'kemeja-formal-premium',
        description: 'Kemeja formal dengan bahan katun premium, nyaman dipakai sehari-hari',
        price: 299000,
        sku: 'KMP-001',
        stock: 50,
        categoryId: categories[0].id,
        featured: true
      },
      {
        name: 'Dress Evening Elegant',
        slug: 'dress-evening-elegant',
        description: 'Dress elegan untuk acara formal dan dinner',
        price: 599000,
        sku: 'DEE-002',
        stock: 30,
        categoryId: categories[1].id,
        featured: true
      },
      {
        name: 'Celana Chinos Slim Fit',
        slug: 'celana-chinos-slim-fit',
        description: 'Celana chinos dengan model slim fit, cocok untuk casual dan semi-formal',
        price: 349000,
        sku: 'CCS-003',
        stock: 40,
        categoryId: categories[2].id,
        featured: true
      },
      {
        name: 'Blouse Wanita Modern',
        slug: 'blouse-wanita-modern',
        description: 'Blouse dengan desain modern dan bahan nyaman',
        price: 249000,
        sku: 'BWM-004',
        stock: 60,
        categoryId: categories[3].id,
        featured: true
      },
      {
        name: 'Hoodie Premium Cotton',
        slug: 'hoodie-premium-cotton',
        description: 'Hoodie dengan bahan cotton premium, nyaman dan hangat',
        price: 399000,
        sku: 'HPC-005',
        stock: 35,
        categoryId: categories[4].id,
        featured: true
      },
      {
        name: 'Kemeja Casual Linen',
        slug: 'kemeja-casual-linen',
        description: 'Kemeja casual dengan bahan linen, breathable dan stylish',
        price: 279000,
        sku: 'KCL-006',
        stock: 45,
        categoryId: categories[0].id,
        featured: false
      },
      {
        name: 'Dress Summer Floral',
        slug: 'dress-summer-floral',
        description: 'Dress dengan motif floral, sempurna untuk musim panas',
        price: 449000,
        sku: 'DSF-007',
        stock: 25,
        categoryId: categories[1].id,
        featured: false
      },
      {
        name: 'Jacket Denim Classic',
        slug: 'jacket-denim-classic',
        description: 'Jacket denim klasik yang tidak pernah ketinggalan zaman',
        price: 529000,
        sku: 'JDC-008',
        stock: 20,
        categoryId: categories[4].id,
        featured: false
      }
    ]

    await Promise.all(
      products.map(product => 
        db.product.create({
          data: product
        })
      )
    )

    return NextResponse.json({ 
      message: 'Sample data created successfully',
      categories: categories.length,
      products: products.length
    })
  } catch (error) {
    console.error('Error creating sample data:', error)
    return NextResponse.json(
      { error: 'Failed to create sample data' },
      { status: 500 }
    )
  }
}