import React, { forwardRef } from "react";
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

const Template1 = forwardRef<HTMLDivElement, Props>(({ profile, contents }, ref) => {
  return (
    <div ref={ref} className="w-[180mm] min-h-[267mm] bg-white p-8 shadow-md">
      <div className="flex items-center gap-4 border-b pb-4 mb-6">
        {profile.photo ? (
          <div className="w-24 h-24 relative rounded-full border overflow-hidden">
            <Image
              src={profile.photo}
              alt="Foto Profil"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            Foto
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold">{profile.name || "Nama Lengkap"}</h1>
          <p className="text-gray-500 text-sm">
            {profile.email || "email@example.com"} | {profile.phone || "08xxxxxxxx"} | {profile.address || "Alamat"}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-600">Ringkasan</h2>
      <p className="mb-6">{profile.summary || "Tulis ringkasan singkat tentang dirimu."}</p>

      {contents.map((c, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {c.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

Template1.displayName = "Template1";
export default Template1;
