'use client';
import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer>
      {/* Bagian atas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20 py-12 bg-blue-500 text-white">
        {/* Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold">Resumify</h2>
          <p className="mt-4 text-sm leading-relaxed">
            The leading platform for creating professional CVs that helps you
            land your dream job with modern templates, easy customization, and
            instant download — making your career journey smarter and faster.
          </p>
        </div>
      {/* About Us */}
    <div className="md:ml-30"> {/* ← geser kanan di layar besar */}
      <h3 className="text-lg font-bold">About Us</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><a href="/About" className="hover:underline">About Resumify</a></li>
        <li><a href="/team" className="hover:underline">Our Team</a></li>
      </ul>
    </div>

    {/* Support */}
    <div className="md:ml-30"> {/* ← geser kanan juga */}
      <h3 className="text-lg font-bold">Support</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><a href="/guide" className="hover:underline">User Guide</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
      </ul>
      <p className="flex items-center mt-3">
  <Image
    src="/email2.png"
    alt="Email"
    width={20}
    height={20}
    className="mr-2"
  />
  <span>resumify@gmail.com</span>
</p>

<p className="flex items-center">
  <Image
    src="/phone-call.png"
    alt="Phone"
    width={20}
    height={20}
    className="mr-2"
  />
  <span>+62 812 3456 7890</span>
</p>

    </div>
    </div>

      {/* Bagian bawah */}
      <div className="bg-blue-600 text-white text-center py-4 text-xs md:text-sm">
        © 2025 Resumify. All rights reserved.
      </div>
    </footer>
  );
}


export default Footer;