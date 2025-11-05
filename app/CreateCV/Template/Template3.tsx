import React, { forwardRef, useRef } from "react";
import Draggable from "react-draggable";
import Image from "next/image";

interface Props {
  profile: {
    name: string;
    email: string;
    phone: string;
    summary: string;
    address: string;
    photo: string;
  };
  contents: { title: string; items: string[] }[];
}

const TemplateDraggable = forwardRef<HTMLDivElement, Props>(({ profile, contents }, ref) => {
  // refs untuk elemen draggable
  const photoRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const emailRef = useRef<HTMLParagraphElement>(null);
  const phoneRef = useRef<HTMLParagraphElement>(null);
  const addressRef = useRef<HTMLParagraphElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative w-[210mm] h-[297mm] bg-white shadow-lg border">
      {/* Foto */}
      <Draggable nodeRef={photoRef}>
        <div ref={photoRef} className="absolute top-10 left-10 w-32 h-32 border rounded-full overflow-hidden relative">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt="Profile"
              fill
              className="object-cover"
              sizes="128px"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              Foto
            </div>
          )}
        </div>
      </Draggable>

      {/* Nama */}
      <Draggable nodeRef={nameRef}>
        <h1 ref={nameRef} className="absolute top-48 left-10 text-3xl font-bold">
          {profile.name || "Nama Lengkap"}
        </h1>
      </Draggable>

      {/* Email */}
      <Draggable nodeRef={emailRef}>
        <p ref={emailRef} className="absolute top-60 left-10 text-sm">
          📧 {profile.email || "email@example.com"}
        </p>
      </Draggable>

      {/* Phone */}
      <Draggable nodeRef={phoneRef}>
        <p ref={phoneRef} className="absolute top-72 left-10 text-sm">
          📞 {profile.phone || "08xxxxxxxx"}
        </p>
      </Draggable>

      {/* Address */}
      <Draggable nodeRef={addressRef}>
        <p ref={addressRef} className="absolute top-84 left-10 text-sm">
          🏠 {profile.address || "Alamat"}
        </p>
      </Draggable>

      {/* Summary */}
      <Draggable nodeRef={summaryRef}>
        <div ref={summaryRef} className="absolute top-96 left-10 w-[300px]">
          <h2 className="font-bold mb-2">Tentang Saya</h2>
          <p>{profile.summary || "Tulis ringkasan singkat tentang diri Anda."}</p>
        </div>
      </Draggable>

      {/* Contents */}
      {contents.map((c, i) => {
        const topPx = 450 + i * 120; // hitung posisi top secara JS
        return (
          <Draggable key={i}>
            <div style={{ top: `${topPx}px`, left: "10px" }} className="absolute bg-gray-100 p-3 rounded w-[300px]">
              <h3 className="font-bold mb-1">{c.title}</h3>
              <ul className="list-disc pl-4">
                {c.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
});

TemplateDraggable.displayName = "TemplateDraggable";
export default TemplateDraggable;
