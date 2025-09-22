"use client";
import { useRouter } from "next/navigation";

export default function TemplateCV() {
  const router = useRouter();

  const templates = [
    { id: 1, name: "Template Modern", preview: "/template1.png" },
    { id: 2, name: "Template Minimalis", preview: "/template2.png" },
    { id: 3, name: "Template Elegan", preview: "/template3.png" },
  ];

  const handleSelect = (id: number) => {
    router.push(`/CreateCV?page=${id}`); // lempar id template
  };

  return (
    <div id="templatecv" className="p-6">
      <h1 className="text-2xl font-bold mb-6">Pilih Template CV</h1>
      <div className="grid grid-cols-3 gap-6">
        {templates.map((t) => (
          <div
            key={t.id}
            className="border rounded shadow hover:shadow-lg cursor-pointer p-4 text-center"
            onClick={() => handleSelect(t.id)}
          >
            <img src={t.preview} alt={t.name} className="mb-4 w-full h-48 object-cover" />
            <h2 className="font-semibold">{t.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
