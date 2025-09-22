"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Template1 from "./Template/Template1";
import Template2 from "./Template/Template2";
import Template3 from "./Template/Template3";
import { address } from "framer-motion/client";

export default function CreateCV() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("page") || "1";

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    address: "",
    photo: "",
  });

  const [contents, setContents] = useState<{ title: string; items: string[] }[]>([]);
  const [newContentTitle, setNewContentTitle] = useState("");
  const [newItem, setNewItem] = useState("");

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addContent = () => {
    if (newContentTitle.trim()) {
      setContents([...contents, { title: newContentTitle, items: [] }]);
      setNewContentTitle("");
    }
  };

  const addItem = (index: number) => {
    if (newItem.trim()) {
      const updated = [...contents];
      updated[index].items.push(newItem);
      setContents(updated);
      setNewItem("");
    }
  };

  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: `${profile.name}-CV`,
  } as any);
  
  // --- Template Styles ---
  const renderTemplate = () => {
    switch (templateId) {
      case "2":
        return <Template2 ref={cvRef} profile={profile} contents={contents} />;
      case "3":
        return <Template3 ref={cvRef} profile={profile} contents={contents} />;
      default:
        return <Template1 ref={cvRef} profile={profile} contents={contents} />;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* FORM */}
      <div>
        <h2 className="text-xl font-bold mb-4">Isi Profil</h2>
        <input name="name" placeholder="Nama Lengkap" value={profile.name} onChange={handleProfileChange} className="border p-2 w-full mb-2" />
        <input name="email" placeholder="Email" value={profile.email} onChange={handleProfileChange} className="border p-2 w-full mb-2" />
        <input name="phone" placeholder="Nomor HP" value={profile.phone} onChange={handleProfileChange} className="border p-2 w-full mb-2" />
        <textarea name="summary" placeholder="Ringkasan singkat" value={profile.summary} onChange={handleProfileChange} className="border p-2 w-full mb-2" />
        <h2 className="text-lg font-bold mt-4">Foto</h2>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        <h2 className="text-lg font-bold mt-4">Tambah Content</h2>
        <input placeholder="Judul Content" value={newContentTitle} onChange={(e) => setNewContentTitle(e.target.value)} className="border p-2 w-full mb-2" />
        <button onClick={addContent} className="bg-blue-500 text-white px-4 py-2 rounded">
          Tambah Content
        </button>
        {contents.map((c, i) => (
          <div key={i} className="mt-4 border p-3 rounded">
            <h3 className="font-bold">{c.title}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {c.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
            <div className="flex gap-2 mt-2">
              <input placeholder={`Tambah item ke ${c.title}`} value={newItem} onChange={(e) => setNewItem(e.target.value)} className="border p-2 flex-1" />
              <button onClick={() => addItem(i)} className="bg-green-500 text-white px-3 py-1 rounded">
                +
              </button>
            </div>
          </div>
        ))}
        <button onClick={handlePrint} className="bg-red-600 text-white px-4 py-2 rounded mt-6">
          Download PDF
        </button>
      </div>

      {/* TEMPLATE CV */}
      <div>{renderTemplate()}</div>
    </div>
  );
}
