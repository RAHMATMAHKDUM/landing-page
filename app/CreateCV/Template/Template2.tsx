import React, { forwardRef } from "react";

interface Props {
  profile: {
    name: string;
    email: string;
    phone: string;
    summary: string;
    photo: string;
  };
  contents: { title: string; items: string[] }[];
}

const Template2 = forwardRef<HTMLDivElement, Props>(({ profile, contents }, ref) => {
  return (
    <div ref={ref} className="p-6 bg-gray-100 text-gray-800 rounded shadow">
      <h1 className="text-3xl font-bold text-center">{profile.name || "Nama Lengkap"}</h1>
      <p className="text-center text-sm text-gray-600">
        {profile.email || "email@example.com"} | {profile.phone || "08xxxxxxxx"}
      </p>
      <hr className="my-4" />

      {/* Ringkasan */}
      <h2 className="font-semibold">Ringkasan</h2>
      <p>{profile.summary || "Tulis ringkasan singkat."}</p>

      {/* Content */}
      {contents.map((c, i) => (
        <div key={i} className="mt-4">
          <h3 className="font-bold">{c.title}</h3>
          <ul className="list-disc pl-5">
            {c.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

Template2.displayName = "Template2";
export default Template2;
