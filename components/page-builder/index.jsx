"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DNDPageBuilder from "@/components/page-builder/dnd-page-builder";

const PageBuilder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DNDPageBuilder />
    </DndProvider>
  );
};

export default PageBuilder;
