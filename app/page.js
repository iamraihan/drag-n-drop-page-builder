import { DndProviderWrapper } from "@/providers/DndProviderWrapper";
import PageBuilder from "@/components/page-builder";

export default function Home() {
  return (
    <main className="">
      <DndProviderWrapper>
        <PageBuilder />
      </DndProviderWrapper>
    </main>
  );
}
