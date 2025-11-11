'use client';
import Link from 'next/link';
import HeaderImage from './image';
import SplitText from '../../componentfont/SplitText';

export default function Header() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <header className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden pt-20">
      {/* dekor */}
      <div className="absolute top-0 right-0 w-[720px] h-[720px] bg-blue-200 rounded-[80px] rotate-45 translate-x-1/4 -translate-y-1/4 opacity-70 pointer-events-none z-0"></div>
      {/* container utama: two-column responsive */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* KIRI: teks (paksa rata kiri) */}
        <div className="flex-1 md:w-1/2 flex flex-col items-start md:pl-16">
          {/* WRAPPER yang memaksa text-align: left (inline style override) */}
          <div style={{ width: '100%', textAlign: 'left' }}>
            <h1
              aria-label="Dapatkan CV Profesional Dalam 10 Menit"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight font-roboto"
              // inline style untuk override semua rule yang mungkin bikin center
              style={{ textAlign: 'left' }}
            >
              {/* Bungkus SplitText di element block yg juga text-left */}
              <div style={{ display: 'block', textAlign: 'left' }}>
                <SplitText
                  text="Dapatkan CV Profesional Dalam 10 Menit"
                  className="inline-block text-left font-bold text-gray-800 leading-tight font-roboto mr-2 -mt-[200px]"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  onLetterAnimationComplete={handleAnimationComplete}
                  // kalau SplitText menerima prop textAlign, kirim juga

                  textAlign="left"
                />
              </div>
            </h1>
          </div>

          {/* Deskripsi */}
          <p
            className="mt-0.2 text-base text-gray-600 max-w-xl"
            style={{ textAlign: 'left' }}
          >
            <SplitText
              text="Resumifly CV online membantu membuat CV Anda menjadi sempurna dengan template CV profesional"
              className="inline-block text-left mt-4 text-base text-gray-600 mr-2"
              delay={40}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              textAlign="left"
            />
          </p>

          {/* CTA */}
          <div className="mt-4 mr-4 relative z-20 text-[12px]">
            <Link
              href="https://polibang.silverspace.my.id/user-home/"
              className="inline-block text-cyan-600 border-2 border-cyan-500 px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Buat CV Sekarang
            </Link>
          </div>
        </div>

        {/* KANAN: gambar */}
        <div className="flex-1 md:w-1/2 flex justify-center md:justify-end">
          <HeaderImage />
        </div>
      </div>
    </header>
  );
}