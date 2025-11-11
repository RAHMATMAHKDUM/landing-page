"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Animasi FadeUp
const FadeUp = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// Animasi FadeLeft
const FadeLeft = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function LogoAnimation() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen overflow-hidden px-6 md:px-20 gap-12 md:gap-20 bg-white">
      
      {/* Background Wave */}
      <div className="absolute inset-0">
        
        {/* Wave Atas (halus, gradien) */}
        <svg
          className="absolute top-0 w-full h-32 text-blue-100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="url(#grad)"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#DBEAFE", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,176C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L0,0Z"></path>
        </svg>

        {/* Wave Bawah */}
        <svg
        className="absolute bottom-[-40px] w-full h-64 text-blue-50"

          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Decorative Circle */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Logo Tengah */}
      <div className="relative w-[300px] h-[300px] flex justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
          className="z-20"
        >
          <Image src="/gettingresume.png" alt="Logo G" width={70} height={70} />
        </motion.div>

        {/* Kotak animasi background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
          whileInView={{ opacity: 0.25, scale: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute w-[140px] h-[140px] bg-blue-500 rounded-2xl"
          style={{ transform: "rotate(45deg)" }}
        ></motion.div>

        {[170, 220, 270].map((size, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, rotate: 45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.3 }}
            viewport={{ once: false, amount: 0.6 }}
            className="absolute border border-blue-300 rounded-2xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "rotate(45deg)",
            }}
          />
        ))}

        {/* Icon sekitar logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute -top-10"
          style={{ transform: "rotate(-45deg)" }}
        >
          <Image src="/internet.png" alt="Web" width={50} height={50} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute left-[-20px] bottom-[70px]"
          style={{ transform: "rotate(-45deg)" }}
        >
          <Image src="/pdf.png" alt="PDF" width={50} height={50} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute right-[-20px] bottom-[70px]"
          style={{ transform: "rotate(-45deg)" }}
        >
          <Image src="/pin.png" alt="Pin" width={45} height={45} />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="relative max-w-md text-left z-10 text-[13px]">
        <FadeLeft>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/gettingresume.png" alt="Mini Logo" width={40} height={40} />
            <h2 className="text-[20px] font-bold text-black">
              Buat CV modern dalam hitungan menit!
            </h2>
          </div>
        </FadeLeft>

        <ul className="space-y-3 text-black ml-6">
          <FadeUp><li className="flex items-start gap-2"><Image src="/done.png" alt="" width={18} height={18} /> Buat CV online lebih cepat & mudah.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/paintbrush.png" alt="" width={18} height={18} /> Desain elegan dan siap pakai.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/notes.png" alt="" width={18} height={18} /> Export ke PDF kapan saja.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/internet (1).png" alt="" width={18} height={18} /> Dapatkan domain pribadi untuk CV kamu menjadi portofolio online.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/clipboard.png" alt="" width={18} height={18} /> Tinggalkan kesan profesional ke HR & recruiter.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/rocket.png" alt="" width={18} height={18} /> Saatnya tampil beda! CV kamu bukan sekadar file, tapi juga website portofolio nya.</li></FadeUp>
        </ul>
      </div>
    </div>
  );
}
