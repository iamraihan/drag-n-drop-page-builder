import { DndProviderWrapper } from "@/providers/DndProviderWrapper";
import PageBuilder from "@/components/page-builder";

export default function Home() {
  return (
    <main className="bg-[#f4f5f7]">
      <h1 className="my-5 text-2xl font-semibold text-center">Page Builder</h1>

      <DndProviderWrapper>
        <PageBuilder />
      </DndProviderWrapper>
    </main>
  );
}
