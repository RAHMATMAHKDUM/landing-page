"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useRef, forwardRef } from "react";
import { useReactToPrint, UseReactToPrintOptions } from "react-to-print";

// --- Template Types ---
interface Profile {
  name: string;
  email: string;
  phone: string;
  summary: string;
  address: string;
  photo: string;
}

interface Content {
  title: string;
  items: string[];
}

interface TemplateProps {
  profile: Profile;
  contents: Content[];
}

// --- Template 1 ---
export const Template1 = forwardRef<HTMLDivElement, TemplateProps>(({ profile, contents }, ref) => {
  return (
    <div ref={ref} className="w-[210mm] h-[297mm] p-6 bg-white border">
      <h1 className="text-3xl font-bold">{profile.name || "Nama Lengkap"}</h1>
      <p>{profile.email}</p>
      <p>{profile.phone}</p>
      <p>{profile.address}</p>
      <p>{profile.summary}</p>

      {contents.map((c, i) => (
        <div key={i} className="mt-4">
          <h3 className="font-bold">{c.title}</h3>
          <ul className="list-disc pl-4">
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

// --- Template 2 ---
export const Template2 = forwardRef<HTMLDivElement, TemplateProps>(({ profile, contents }, ref) => {
  return (
    <div ref={ref} className="w-[210mm] h-[297mm] p-6 bg-gray-50 border">
      <h1 className="text-2xl font-semibold">{profile.name}</h1>
      <p>{profile.summary}</p>
      {contents.map((c, i) => (
        <div key={i}>
          <h3 className="font-semibold">{c.title}</h3>
          <ul className="list-disc pl-4">
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

// --- Template 3 ---
export const Template3 = forwardRef<HTMLDivElement, TemplateProps>(({ profile, contents }, ref) => {
  return (
    <div ref={ref} className="w-[210mm] h-[297mm] p-6 bg-white border">
      <h1 className="text-3xl font-bold text-center">{profile.name}</h1>
      <p className="text-center">{profile.summary}</p>
      {contents.map((c, i) => (
        <div key={i}>
          <h3 className="font-bold">{c.title}</h3>
          <ul className="list-disc pl-4">
            {c.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});
Template3.displayName = "Template3";

// --- CreateCV Page ---
export default function CreateCV() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("page") || "1";

  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    phone: "",
    summary: "",
    address: "",
    photo: "",
  });

  const [contents, setContents] = useState<Content[]>([]);
  const [newContentTitle, setNewContentTitle] = useState("");
  const [newItems, setNewItems] = useState<string[]>([]);

  const cvRef = useRef<HTMLDivElement>(null);

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
      setNewItems([...newItems, ""]);
    }
  };

  const handleNewItemChange = (index: number, value: string) => {
    const updated = [...newItems];
    updated[index] = value;
    setNewItems(updated);
  };

  const addItem = (index: number) => {
    if (newItems[index]?.trim()) {
      const updatedContents = [...contents];
      updatedContents[index].items.push(newItems[index]);
      setContents(updatedContents);

      const updatedNewItems = [...newItems];
      updatedNewItems[index] = "";
      setNewItems(updatedNewItems);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: `${profile.name}-CV`,
  } as UseReactToPrintOptions);

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
        <input name="address" placeholder="Alamat" value={profile.address} onChange={handleProfileChange} className="border p-2 w-full mb-2" />
        <h2 className="text-lg font-bold mt-4">Foto</h2>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />

        <h2 className="text-lg font-bold mt-4">Tambah Content</h2>
        <input placeholder="Judul Content" value={newContentTitle} onChange={(e) => setNewContentTitle(e.target.value)} className="border p-2 w-full mb-2" />
        <button onClick={addContent} className="bg-blue-500 text-white px-4 py-2 rounded">Tambah Content</button>

        {contents.map((c, i) => (
          <div key={i} className="mt-4 border p-3 rounded">
            <h3 className="font-bold">{c.title}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {c.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
            <div className="flex gap-2 mt-2">
              <input placeholder={`Tambah item ke ${c.title}`} value={newItems[i] || ""} onChange={(e) => handleNewItemChange(i, e.target.value)} className="border p-2 flex-1" />
              <button onClick={() => addItem(i)} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
            </div>
          </div>
        ))}

        <button onClick={handlePrint} className="bg-red-600 text-white px-4 py-2 rounded mt-6">Download PDF</button>
      </div>

      {/* TEMPLATE */}
      <div>{renderTemplate()}</div>
    </div>
  );
}
