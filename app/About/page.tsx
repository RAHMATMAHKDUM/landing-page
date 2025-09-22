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
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto">The Leading Online CV Platform for Your Dream Career</p>
      </div>

      {/* Deskripsi */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-700 text-lg">
          This website offers a free online CV creation platform with a modern and easy-to-use design. We also provide a web domain for your portfolio after creating your CV.
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-white text-blue-500 border-solid border-2 border-blue-300 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Create CV</button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
          <FaFilePdf className="mx-auto text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Export to PDF</h3>
          <p className="text-gray-600">Your CV can be downloaded directly in high-quality PDF format.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
          <MdOutlineDomain className="mx-auto text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Custom Domain</h3>
          <p className="text-gray-600">Get a unique CV link with a custom domain that's easy to share.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
          <FaPalette className="mx-auto text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
          <p className="text-gray-600">Choose from a variety of ready-to-use professional template designs.</p>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-blue-50 py-12 rounded-xl p-6 mx-6 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Our Commitment</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="flex items-start bg-white p-6 rounded-xl shadow">
            <CheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Professionalism</h4>
              <p className="text-gray-600">Each template is designed to reflect a high-quality and modern CV.</p>
            </div>
          </div>
          <div className="flex items-start bg-white p-6 rounded-xl shadow">
            <CheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Responsiveness</h4>
              <p className="text-gray-600">CVs are well-viewed on all devices, from mobile phones to laptops.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-500 text-white text-center py-12 mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Dream Career?</h3>
        <p className="max-w-2xl mx-auto mb-6">With a focus on ease of use, professionalism, and responsiveness, we are ready to help you have a modern, attractive CV that supports your career journey.</p>
        {/* <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Get Started</button> */}
      </div>
    </div>
  );
}
