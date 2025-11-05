"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    // { name: "Template CV", href: "#templatecv" },
    { name: "Tentang", href: "/About" },
    { name: "Buat CV", href: "https://polibang.silverspace.my.id/login/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image src="/gettingresume.png" alt="Resumifly" width={32} height={32} />
            <span className="text-4xl font-bold text-gray-800">Gettingresume</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Menu utama */}
            <div className="flex space-x-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={`${pathname === link.href ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700 hover:text-blue-500"}`}>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Login & Register (Desktop) */}
            <div className="flex items-center space-x-4 ml-6">
              <a href="https://polibang.silverspace.my.id/login/" className="text-gray-700 hover:text-blue-500">
                MASUK
              </a>
              <a href="https://polibang.silverspace.my.id/register/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                DAFTAR
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`block ${pathname === link.href ? "text-blue-500 font-semibold border-b-2 border-blue-500 inline-block" : "text-gray-700 hover:text-blue-500"}`}>
                {link.name}
              </Link>
            ))}

            {/* Mobile Login & Register */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link href="/login" className={`block ${pathname === "/login" ? "text-blue-500 font-semibold border-b-2 border-blue-500 inline-block" : "text-gray-700 hover:text-blue-500"}`}>
                MASUK
              </Link>
              <Link href="/register" className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                DAFTAR
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
