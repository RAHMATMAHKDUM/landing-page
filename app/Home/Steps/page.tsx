"use client";
import { FileText, Globe, FileDown } from "lucide-react";
import Link from "next/link";
import { Roboto } from "next/font/google"; // ganti ke Roboto

// Import font Roboto Bold
const roboto = Roboto({
  subsets: ["latin"],
  weight: "700", // Bold
});

export default function HowToMakeCV() {
  const steps = [
    {
      id: 1,
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Fill out the form",
      desc: "Enter your own data and content as needed.",
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Create a Domain",
      desc: "Get a unique address like Example: (yourname.com).",
    },
    {
      id: 3,
      icon: <FileDown className="w-8 h-8 text-white" />,
      title: "Download & Share",
      desc: "Download your CV in PDF or copy your CV website link.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className={`text-3xl md:text-4xl text-gray-800 ${roboto.className}`}>
          How To Make A CV That{" "}
          <span className="text-blue-500">Attracts Attention</span>
        </h2>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-blue-50 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 shadow-md">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className={`mt-4 font-semibold text-lg text-gray-800 ${roboto.className}`}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
  <Link
    href="http://192.168.21.63:8005/login/"
    className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
  >
    Create CV
  </Link>
</div>

      </div>
    </section>
  );
}
