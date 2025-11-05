"use client";
import React from "react";
import { FaFilePdf, FaPalette } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div id="about" className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Platform CV Online Terdepan untuk Karier Impian Anda
        </p>
      </div>

      {/* Deskripsi */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-700 text-lg">
          Website ini menyediakan platform pembuatan CV online gratis dengan desain modern dan mudah digunakan. 
          Kami juga menyediakan domain web untuk portofolio Anda setelah membuat CV.
        </p>
      </div>

      {/* Fitur Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
          <FaFilePdf className="mx-auto text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ekspor ke PDF</h3>
          <p className="text-gray-600">
            CV Anda dapat diunduh langsung dalam format PDF berkualitas tinggi.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
          <MdOutlineDomain className="mx-auto text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Domain Khusus</h3>
          <p className="text-gray-600">
            Dapatkan tautan CV unik dengan domain khusus yang mudah dibagikan.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
          <FaPalette className="mx-auto text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Template Profesional</h3>
          <p className="text-gray-600">
            Pilih dari berbagai desain template profesional yang siap digunakan.
          </p>
        </div>
      </div>

      {/* Komitmen Kami */}
      <div className="bg-blue-50 py-12 rounded-xl p-6 mx-6 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Komitmen Kami</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="flex items-start bg-white p-6 rounded-xl shadow">
            <CheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Profesionalisme</h4>
              <p className="text-gray-600">
                Setiap template dirancang untuk mencerminkan CV yang berkualitas tinggi dan modern.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-white p-6 rounded-xl shadow">
            <CheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Responsif</h4>
              <p className="text-gray-600">
                CV dapat dilihat dengan baik di semua perangkat, mulai dari ponsel hingga laptop.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-500 text-white text-center py-12 mt-12">
        <h3 className="text-2xl font-bold mb-4">Siap Memulai Karier Impian Anda?</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Dengan fokus pada kemudahan penggunaan, profesionalisme, dan tampilan responsif, 
          kami siap membantu Anda memiliki CV modern dan menarik yang mendukung perjalanan karier Anda.
        </p>
      </div>
      {/* Footer Copyright */}
      <div className="bg-blue-500 text-white text-center py-4 text-sm border-t border-blue-400">
        © 2025 Gettingresume. Semua hak cipta dilindungi.
      </div>
    </div>
  );
}
    
