'use client';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      {/* Bagian atas */}
      <div className="w-full px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            {/* Deskripsi */}
            <div className="flex flex-col items-center md:ml-14">
              <div className="w-full max-w-[280px]">
                <h2 className="text-[16px] font-bold mb-3">GettingResume</h2>
                <p className="text-[13px] leading-relaxed text-justify">
                  Platform terdepan untuk membuat CV profesional yang membantu Anda
                  mendapatkan pekerjaan impian dengan template modern, kustomisasi mudah,
                  dan unduhan instan — membuat perjalanan karier Anda lebih cerdas dan cepat.
                </p>
              </div>
            </div>

            {/* Tentang Kami */}
            <div className="flex flex-col items-center md:ml-32">
              <div className="w-full max-w-[280px]">
                <h3 className="text-lg font-bold mb-3 text-[16px]">Tentang Kami</h3>
                <ul className="space-y-2 text-sm text-[13px]">
                  <li><a href="/About" className="hover:underline">Tentang GettingResume</a></li>
                  <li><a href="/OurTeam" className="hover:underline">Tim Kami</a></li>
                </ul>
              </div>
            </div>

            {/* Dukungan */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px]">
                <h3 className="text-lg font-bold mb-3 text-[16px]">Dukungan</h3>
                <ul className="space-y-3 text-sm text-[13px]">
                  <li><a href="/UserGuide" className="hover:underline">Panduan Pengguna</a></li>
                  <li>Hubungi Kami</li>
                  <li className="flex items-center gap-2">
                    <img src="/email2.png" alt="email" className="w-4 h-4" />
                    <span>gettingresume@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/phone-call.png" alt="telepon" className="w-4 h-4" />
                    <span>+62 812 3456 7890</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="bg-blue-500 text-white text-center py-4 text-sm border-t border-blue-400">
        © 2025 GettingResume. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}

export default Footer;