"use client";

import { DndProviderWrapper } from "@/providers/DndProviderWrapper";
import PageBuilder from "@/components/page-builder";

export default function Home() {
  return (
    <main>
      <h1 className="my-5 text-2xl font-semibold text-center">Page Builder</h1>

      <DndProviderWrapper>
        <PageBuilder />
      </DndProviderWrapper>
    </main>
  );
}
