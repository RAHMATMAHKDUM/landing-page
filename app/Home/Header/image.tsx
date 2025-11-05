"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeaderImage() {
  const cvWidth = 500; 
  const cvHeight = 500; 
  return (
    <div className="flex-1 mt-10 md:mt-0 flex justify-center">
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        
        <Image
          src="/cv.png"
          alt="CV Document"
          width={cvWidth}
          height={cvHeight}
          className="rounded-lg drop-shadow-2xl -mt-30"
        />

        
        <motion.div
          animate={{
            x: [0, 60, -60, 0],   
          }}
          transition={{
            duration: 6,      
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[--1px]"
        >
          <Image
            src="/kaca.png"
            alt="Magnifier"
            width={180}
            height={180}
            className="drop-shadow-xl "
          />
        </motion.div>
      </div>
    </div>
  );
}
