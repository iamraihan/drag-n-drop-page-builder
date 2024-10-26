"use client";

import DraggableItem from "@/components/page-builder/DraggableItem";
import DroppableItem from "@/components/page-builder/DroppableItem";

const PageBuilder = () => {
  return (
    <div className="container mx-auto grid grid-cols-10 gap-3">
      <div className="col-span-3">
        <DraggableItem />
      </div>
      <div className="col-span-5">
        <DroppableItem />
      </div>
      <div className="col-span-2">Actions</div>
    </div>
  );
};

export default PageBuilder;
