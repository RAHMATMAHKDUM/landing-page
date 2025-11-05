"use client";

import React, { useState } from 'react';
import { FileText, Globe, Download, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function ModernUserGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null); // ✅ FIXED TYPE

  const steps = [
    {
      id: 1,
      icon: FileText,
      title: "Isi Formulir",
      subtitle: "Lengkapi Data Pribadi Anda",
      description: "Masukkan data dan konten sesuai kebutuhan Anda.",
      details: [
        "Isi informasi pribadi seperti nama lengkap, email, dan nomor telepon",
        "Tambahkan pengalaman kerja dengan detail posisi dan tanggung jawab",
        "Cantumkan pendidikan formal dan sertifikasi yang dimiliki",
        "Tambahkan keterampilan dan keahlian yang relevan",
        "Opsional: Tambahkan portfolio atau proyek yang pernah dikerjakan"
      ],
      tips: "Pastikan semua informasi yang diisi akurat dan terkini untuk hasil terbaik."
    },
    {
      id: 2,
      icon: Globe,
      title: "Buat Domain",
      subtitle: "Pilih Alamat Website Unik",
      description: "Dapatkan alamat unik seperti Contoh: (namasaya.com).",
      details: [
        "Pilih nama domain yang mudah diingat dan profesional",
        "Sistem akan memeriksa ketersediaan domain secara otomatis",
        "Domain dapat menggunakan nama Anda atau brand personal",
        "Format domain: namanda.platform.com atau custom domain",
        "Domain langsung aktif setelah pembuatan"
      ],
      tips: "Gunakan nama yang simpel dan mudah dieja untuk memudahkan orang mengingat website Anda."
    },
    {
      id: 3,
      icon: Download,
      title: "Unduh & Bagikan",
      subtitle: "Ekspor dalam Berbagai Format",
      description: "Unduh CV Anda dalam bentuk PDF atau salin tautan website CV Anda.",
      details: [
        "Download CV dalam format PDF berkualitas tinggi",
        "Dapatkan link website CV yang dapat dibagikan",
        "Salin link untuk dibagikan via email atau media sosial",
        "CV PDF siap dikirim ke perusahaan atau recruiter",
        "Website CV dapat diakses kapan saja tanpa perlu file"
      ],
      tips: "Gunakan PDF untuk lamaran formal dan link website untuk portfolio online yang interaktif."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Panduan Pengguna
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ikuti 3 langkah sederhana untuk membuat CV profesional dan website portfolio Anda
            </p>
          </div>
        </div>
      </div>

      {/* Main Steps */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.id;
            
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 opacity-20 z-0" 
                       style={{ width: 'calc(100% - 2rem)' }} />
                )}
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.id}
                  </div>

                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-13 h-13 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group/btn"
                    >
                      <span className="mr-2">
                        {isExpanded ? 'Sembunyikan Detail' : 'Lihat Detail'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 group-hover/btn:transform group-hover/btn:-translate-y-1 transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 group-hover/btn:transform group-hover/btn:translate-y-1 transition-transform" />
                      )}
                    </button>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-gray-100 animate-in slide-in-from-top duration-300">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                          Langkah-langkah:
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <p className="text-sm text-blue-900">
                            <span className="font-semibold">💡 Tips: </span>
                            {step.tips}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-bule-500 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Siap Membuat CV Profesional Anda?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Mulai sekarang dan dapatkan CV berkualitas tinggi serta website portfolio dalam hitungan menit
          </p>
          <a
  href="https://polibang.silverspace.my.id/login/"
  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 inline-flex items-center"
>
  Mulai Sekarang
  <ArrowRight className="inline-block ml-2 w-5 h-5" />
</a>
        </div>
      </div>
    </div>
  );
}
