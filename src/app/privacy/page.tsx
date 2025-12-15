'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600">
            PT OTSKY STORE SERANG - Perlindungan Data Pribadi Anda
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di PT OTSKY STORE SERANG. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan 
                layanan kami.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam 
                Kebijakan Privasi ini. Jika Anda tidak setuju dengan praktik ini, harap jangan 
                menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Tanggal lahir</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Transaksi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Riwayat pembelian</li>
                    <li>Metode pembayaran</li>
                    <li>Alamat penagihan</li>
                    <li>Informasi pengiriman</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis perangkat</li>
                    <li>Browser yang digunakan</li>
                    <li>Data cookie dan tracking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengirimkan informasi produk dan promosi yang relevan</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Melakukan analisis pasar dan penelitian</li>
                <li>Memastikan keamanan dan mencegah penipuan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                PT OTSKY STORE SERANG berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke data pribadi hanya untuk staf yang berwenang</li>
                <li>System keamanan yang terupdate secara berkala</li>
                <li>Audit keamanan rutin untuk mengidentifikasi kerentanan</li>
                <li>Protokol respons insiden untuk penanganan pelanggaran data</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li>Menghapus data pribadi Anda (dengan beberapa pengecualian)</li>
                <li>Membatasi pengolahan data pribadi Anda</li>
                <li>Menolak pengolahan data untuk tujuan pemasaran</li>
                <li>Meminta transfer data ke pihak ketiga</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                melaksanakan hak Anda, silakan hubungi kami:
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
                  <strong>Email:</strong> privacy@otskystore.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Update Information */}
          <Card className="border-purple-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembaruan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
                perubahan dalam praktik kami atau perubahan hukum yang berlaku. Kami akan 
                memberitahukan Anda tentang perubahan signifikan dengan menampilkan pemberitahuan 
                di website kami atau mengirimkan email kepada Anda.
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