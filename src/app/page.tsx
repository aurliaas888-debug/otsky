'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, ShoppingBag, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    // Fetch featured products
    fetch('/api/products/featured')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="OTSKY STORE" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  OTSKY STORE
                </h1>
                <p className="text-xs text-gray-500">PT OTSKY STORE SERANG</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</Link>
              <Link href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Produk</Link>
              <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</Link>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Belanja Sekarang
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100">
            <div className="px-4 py-2 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Beranda</Link>
              <Link href="#products" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Produk</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Tentang</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Kontak</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                  🛍️ Premium Fashion Store
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Temukan Gaya
                  </span>
                  <br />
                  <span className="text-gray-900">Terbaik Anda</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  PT OTSKY STORE SERANG menyediakan koleksi pakaian terkini dengan kualitas premium 
                  dan desain yang trendy untuk menunjang penampilan Anda sehari-hari.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Lihat Koleksi
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                  Hubungi Kami
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-500">Produk Terjual</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-500">Kategori</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600">4.8⭐</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-3 opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform hover:rotate-1 transition-transform duration-500">
                <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <ShoppingBag className="w-32 h-32 text-purple-400 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              Produk Unggulan
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Koleksi Terbaru Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai pilihan pakaian trendy dengan kualitas terbaik 
              yang sesuai dengan gaya dan kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product: any) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-purple-100">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-lg overflow-hidden">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag className="w-16 h-16 text-purple-300" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-600">
                        Rp {product.price?.toLocaleString('id-ID')}
                      </span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300">
                        Beli
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              // Placeholder products
              [1, 2, 3, 4].map((i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-purple-100">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-lg flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-purple-300" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Produk Trendy {i}</h4>
                    <p className="text-sm text-gray-600 mb-3">Koleksi terbaru dengan desain modern dan nyaman dipakai</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-600">Rp 199.000</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300">
                        Beli
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
              Lihat Semua Produk
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                Tentang Kami
              </Badge>
              <h3 className="text-4xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  PT OTSKY STORE SERANG
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami adalah perusahaan retail pakaian yang berkomitmen untuk menyediakan 
                produk berkualitas tinggi dengan desain terkini. Dengan pengalaman bertahun-tahun 
                dalam industri fashion, kami memahami kebutuhan pelanggan akan pakaian yang 
                nyaman, stylish, dan terjangkau.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Visi kami menjadi toko pakaian pilihan utama di Serang dan sekitarnya, 
                dengan misi memberikan kepuasan maksimal kepada setiap pelanggan melalui 
                produk berkualitas dan pelayanan terbaik.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md">
                  <div className="text-2xl font-bold text-purple-600 mb-1">2015</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-md">
                  <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Kepuasan Pelanggan</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">🏪</div>
                  <p className="text-gray-600">Store Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">
              Hubungi Kami
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Kunjungi Toko Kami
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan lokasi kami dan dapatkan koleksi terbaru dengan harga terbaik
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                <p className="text-gray-600">
                  Jl. Jenderal Ahmad Yani Serang No.98<br />
                  Desa/Kelurahan Sumur Pecung<br />
                  Kec. Serang, Kota Serang<br />
                  Provinsi Banten
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Telepon</h4>
                <p className="text-gray-600">
                  <a href="tel:082396249605" className="text-purple-600 hover:text-purple-700">
                    0823-9624-9605
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">
                  info@otskystore.com<br />
                  support@otskystore.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="OTSKY STORE" width={32} height={32} className="rounded-lg" />
                <div>
                  <h4 className="font-bold text-lg">OTSKY STORE</h4>
                  <p className="text-xs text-purple-200">PT OTSKY STORE SERANG</p>
                </div>
              </div>
              <p className="text-purple-200 text-sm">
                Toko pakaian terpercaya dengan koleksi terkini dan kualitas terbaik.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><Link href="#home" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Produk</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">Tentang</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pengiriman</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pengembalian</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Jam Operasional</h5>
              <ul className="space-y-1 text-sm text-purple-200">
                <li>Senin - Jumat: 09:00 - 21:00</li>
                <li>Sabtu: 09:00 - 22:00</li>
                <li>Minggu: 10:00 - 20:00</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-purple-700" />

          <div className="text-center text-sm text-purple-200">
            <p>&copy; 2024 PT OTSKY STORE SERANG. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6282396249605" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}