
'use client';
import React from 'react';
function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      {/* Bagian atas */}
      <div className="w-full px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
            {/* Deskripsi */}
           <div className="text-center md:text-left md:-ml-4">
              <h2 className="text-2xl font-bold mb-3">Gettingresume</h2>
              <p className="text-sm leading-relaxed mx-auto md:mx-0 md:max-w-none">
                Platform terdepan untuk membuat CV profesional yang membantu Anda
                mendapatkan pekerjaan impian dengan template modern, kustomisasi mudah,
                dan unduhan instan — membuat perjalanan karier Anda lebih cerdas dan cepat.
              </p>
            </div>
            {/* Tentang Kami */}
            <div className="text-center md:text-left md:pl-30">
              <h3 className="text-lg font-bold mb-3">Tentang Kami</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/About" className="hover:underline">Tentang Resumify</a></li>
                <li><a href="/OurTeam" className="hover:underline">Tim Kami</a></li>
              </ul>
            </div>
            {/* Dukungan */}
            <div className="text-center md:text-left md:pl-36">
              <h3 className="text-lg font-bold mb-3">Dukungan</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/UserGuide" className="hover:underline">Panduan Pengguna</a></li>
                <li>Hubungi Kami</li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <img src="/email2.png" alt="email" className="w-5 h-5" />
                  <span>gettingresume@gmail.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <img src="/phone-call.png" alt="telepon" className="w-5 h-5" />
                  <span>+62 812 3456 7890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bawah */}
      <div className="bg-blue-500 text-white text-center py-4 text-sm border-t border-blue-400">
        © 2025 Gettingresume. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
export default Footer;
