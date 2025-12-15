'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, ShoppingCart, Package, AlertCircle, CreditCard } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TermsAndConditions() {
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

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            PT OTSKY STORE SERANG - Aturan Penggunaan Layanan
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di PT OTSKY STORE SERANG. Syarat dan Ketentuan ini mengatur 
                penggunaan layanan kami, termasuk pembelian produk melalui website toko fisik kami. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Product Information */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Informasi Produk</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deskripsi Produk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kami berusaha menyajikan informasi produk yang akurat, namun warna dan tampilan 
                    aktual mungkin sedikit berbeda karena perbedaan monitor dan pencahayaan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ketersediaan Stok</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ketersediaan produk dapat berubah sewaktu-waktu. Kami berhak membatalkan pesanan 
                    jika produk tidak tersedia setelah pesanan dibuat.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Harga</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Harga yang tercantum adalah harga dalam Rupiah dan sudah termasuk PPN. 
                    Kami berhak mengubah harga tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ordering Process */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Proses Pemesanan</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cara Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pilih produk yang diinginkan</li>
                    <li>Tambahkan ke keranjang belanja</li>
                    <li>Isi informasi pengiriman yang lengkap</li>
                    <li>Pilih metode pembayaran</li>
                    <li>Konfirmasi pesanan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Konfirmasi Pesanan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Setelah pesanan dibuat, kami akan mengirimkan konfirmasi melalui email atau WhatsApp. 
                    Pesanan dianggap sah setelah pembayaran berhasil dikonfirmasi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pembayaran</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Kami menerima berbagai metode pembayaran:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                    <li>E-Wallet (GoPay, OVO, Dana, LinkAja)</li>
                    <li>Pembayaran di toko (cash/debit)</li>
                    <li>COD (Cash on Delivery) untuk area tertentu</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jatuh Tempo Pembayaran</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pembayaran harus diselesaikan dalam waktu 2x24 jam setelah pesanan dibuat. 
                    Pesanan akan dibatalkan otomatis jika pembayaran tidak dilakukan dalam waktu yang ditentukan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Layanan Pengiriman</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kami menggunakan layanan pengiriman terpercaya seperti JNE, TIKI, J&T, dan Gojek. 
                    Estimasi waktu pengiriman bervariasi tergantung lokasi dan layanan yang dipilih.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Biaya Pengiriman</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Biaya pengiriman dihitung berdasarkan berat produk dan jarak pengiriman. 
                    Gratis ongkir dapat berlaku untuk minimum pembelian tertentu.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Resi Pengiriman</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nomor resi akan dikirimkan setelah produk dikirim. Anda dapat melacak status 
                    pengiriman melalui website kurir atau menghubungi customer service kami.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengembalian dan Pengembalian Dana</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Produk dapat dikembalikan dalam kondisi:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Salah ukuran atau warna</li>
                    <li>Produk cacat atau rusak</li>
                    <li>Tidak sesuai dengan deskripsi</li>
                    <li>Dalam waktu 7 hari setelah penerimaan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prosedur Pengembalian</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hubungi customer service kami untuk proses pengembalian. Produk harus dalam 
                    kondisi asli dengan tag dan kemasan lengkap.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pengembalian Dana</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dana akan dikembalikan setelah produk diterima dan diperiksa. Proses 
                    pengembalian memakan waktu 3-7 hari kerja.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Semua konten di website PT OTSKY STORE SERANG, termasuk namun tidak terbatas pada 
                teks, gambar, logo, dan desain, dilindungi oleh hak cipta dan merek dagang.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dilarang keras menyalin, mendistribusikan, atau menggunakan konten kami tanpa 
                izin tertulis dari PT OTSKY STORE SERANG.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pembatasan Tanggung Jawab</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                PT OTSKY STORE SERANG tidak bertanggung jawab atas:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                <li>Kesalahan yang disebabkan oleh pengguna dalam memberikan informasi</li>
                <li>Gangguan teknis atau maintenance website</li>
                <li>Penyalahgunaan layanan oleh pihak ketiga</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Perusahaan:</strong> PT OTSKY STORE SERANG
                </p>
                <p className="text-gray-700">
                  <strong>Alamat:</strong> Jl. Jenderal Ahmad Yani Serang No.98, Desa/Kelurahan Sumur Pecung, 
                  Kec. Serang, Kota Serang, Provinsi Banten
                </p>
                <p className="text-gray-700">
                  <strong>Telepon:</strong> 0823-9624-9605
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@otskystore.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Update Information */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembaruan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Syarat dan Ketentuan ini dapat diperbarui dari waktu ke waktu. Kami akan memberitahukan 
                perubahan signifikan melalui website atau email. Penggunaan layanan yang berkelanjutan 
                setelah perubahan dianggap sebagai persetujuan Anda terhadap syarat yang diperbarui.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>Tanggal berlaku:</strong> 1 Januari 2024<br />
                <strong>Pembaruan terakhir:</strong> 1 Januari 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image src="/logo.png" alt="OTSKY STORE" width={32} height={32} className="rounded-lg" />
            <div>
              <h4 className="font-bold">OTSKY STORE</h4>
              <p className="text-xs text-purple-200">PT OTSKY STORE SERANG</p>
            </div>
          </div>
          <p className="text-purple-200 text-sm">
            &copy; 2024 PT OTSKY STORE SERANG. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}