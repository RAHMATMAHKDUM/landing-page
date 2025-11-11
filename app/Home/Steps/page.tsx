"use client";

import React, { useState } from 'react';
import { FileText, Globe, Download, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function ImprovedCVGuide() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

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
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-64 text-blue-50"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg
          className="absolute bottom-0 w-full h-64 text-blue-100 opacity-50"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg
          className="absolute top-0 w-full h-64 text-blue-50 transform rotate-180"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Cara Membuat CV yang{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Menarik Perhatian
          </span>
        </h2>

        {/* Main Steps */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.id;
            
            return (
              <div key={step.id} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-400 opacity-20 z-0" 
                       style={{ width: 'calc(100% - 1.5rem)' }} />
                )}
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md p-2 sm:p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out border border-gray-100 overflow-hidden">
                  {/* Step Number Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out mb-4 sm:mb-5">
                    <Icon className="w-10 h-10 sm:w-5 sm:h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <h3 className="font-bold text-lg !text-[17px] lg:text-xl text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                    <p className="!text-[13px] !text-[13px] font-medium text-blue-600 mb-2">{step.subtitle}</p>
                    <p className="text-gray-600 !text-[10px] !text-[12px] leading-relaxed mb-3 sm:mb-4 font-semibold">{step.description}</p>

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                      className="flex items-center text-blue-600 hover:text-blue-700 text-xs !text-[12px] font-medium transition-all duration-300 ease-out group/btn">
                      <span className="mr-1 sm:mr-2">
                        {isExpanded ? 'Sembunyikan Detail' : 'Lihat Detail'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-out group-hover/btn:-translate-y-0.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-out group-hover/btn:translate-y-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 text-left animate-in slide-in-from-top-2 duration-500 ease-out">
                      <h4 className="font-semibold !text-[13px] sm:text-base text-gray-900 mb-2 sm:mb-3 flex items-center">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                        Langkah-langkah:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start !text-[12px] sm:text-sm text-gray-700 font-semibold">
                            <ArrowRight className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-100">
                        <p className="text-xs sm:text-sm text-blue-900 !text-[12px]">
                          <span className="font-semibold !text-[12px]">💡 Tips: </span>
                          {step.tips}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Button */}
        <div className="mt-8 sm:mt-10 ">
          <a
            href="https://polibang.silverspace.my.id/user-home/"
            className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 text-[12px] text-[12px] border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 ease-out hover:scale-105"
          >
            Buat CV
          </a>
        </div>
      </div>
    </section>
  );
}