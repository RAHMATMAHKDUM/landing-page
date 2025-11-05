// app/CreateCV/page.tsx
import React, { Suspense } from "react";
import CreateCVClient from "./TemplateCV";

export default function CreateCVPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CreateCVClient />
    </Suspense>
  );
}
