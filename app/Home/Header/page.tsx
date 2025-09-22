"use client";
import Link from "next/link";
import HeaderImage from "./image";
import SplitText from "../../componentfont/SplitText";

export default function Header() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <header className="relative bg-gradient-to-br bg-white overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-[720px] h-[720px] bg-blue-200 rounded-[80px] rotate-45 translate-x-1/4 -translate-y-1/4 opacity-70"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <SplitText
            text="Dapatkan CV Profesional dalam 10 menit"
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight font-roboto ml-2 "
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Resumifly CV online membantu membuat CV Anda menjadi sempurna dengan template CV profesional"
            className="mt-4 text-lg text-gray-600 ml-2"
            delay={30}
            duration={0.5}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-50px"
            textAlign="left"
          />

          <div className="mt-6 flex justify-center md:justify-start space-x-4 ml-2">
            <Link href="http://192.168.21.63:8005/login/" className=" text-cyan-500  border-cyan-500 border-2 px-6 py-3 rounded-md hover:bg-blue-600 transition">
              Buat CV sekarang
            </Link>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <HeaderImage />
        </div>
      </div>
    </header>
  );
}
