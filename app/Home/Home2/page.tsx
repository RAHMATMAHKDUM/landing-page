"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// 🚀 Import dari reactbits

// Custom FadeUp and FadeLeft components using framer-motion
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
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-white px-6 md:px-20 gap-50">
      <div className="relative w-[300px] h-[300px] flex justify-center items-center">
        {/* Logo tengah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
          className="z-20"
        >
          <Image src="/logo resumifly.png" alt="Logo R" width={90} height={90} />
        </motion.div>

        {/* Background animasi kotak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
          whileInView={{ opacity: 0.25, scale: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute w-[170px] h-[170px] bg-blue-500 rounded-2xl"
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

        {/* Icon animasi sekitar logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute -top-8"
          style={{ transform: "rotate(-45deg)" }}
        >
          <Image src="/internet.png" alt="Web" width={50} height={50} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute left-[-20px] bottom-[42px]"
          style={{ transform: "rotate(-45deg)" }}
        >
          <Image src="/pdf.png" alt="PDF" width={50} height={50} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.6 }}
          className="absolute right-[-20px] bottom-[42px]"
          style={{ transform: "rotate(-45deg)" }}
        >
          <Image src="/pin.png" alt="Pin" width={45} height={45} />
        </motion.div>
      </div>

      
      <div className="max-w-md text-left md:ml-20">
        
        <FadeLeft>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo resumifly.png" alt="Mini Logo" width={70} height={70} />
            <h2 className="text-3xl font-bold text-black">
              Buat CV modern dalam hitungan menit!
            </h2>
          </div>
        </FadeLeft>

        
        <ul className="space-y-3 text-black">
          <FadeUp><li className="flex items-start gap-2"><Image src="/done.png" alt="" width={20} height={20} /> Buat CV online lebih cepat & mudah.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/paintbrush.png" alt="" width={20} height={20} /> Desain elegan dan siap pakai.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/notes.png" alt="" width={20} height={20} /> Export ke PDF kapan saja.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/internet (1).png" alt="" width={20} height={20} /> Dapatkan domain pribadi untuk CV kamu menjadi portofolio online.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/clipboard.png" alt="" width={20} height={20} /> Tinggalkan kesan profesional ke HR & recruiter.</li></FadeUp>
          <FadeUp><li className="flex items-start gap-2"><Image src="/rocket.png" alt="" width={20} height={20} /> Saatnya tampil beda! CV kamu bukan sekadar file, tapi juga website portofolio nya.</li></FadeUp>
        </ul>
      </div>
    </div>
  );
}
