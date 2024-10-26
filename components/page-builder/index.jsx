"use client";

import DraggableItem from "@/components/page-builder/DraggableItem";
import DroppableItem from "@/components/page-builder/DroppableItem";
import { Blogs, CTA } from "@/helpers/ui";
import { useState } from "react";

const PageBuilder = () => {
  const [items, setItems] = useState([
    { id: 1, component: Blogs, thumbnail: "/assets/blog-01.webp" },
    { id: 2, component: CTA, thumbnail: "/assets/blog-02.webp" },
  ]);
  return (
    <div className="container mx-auto grid grid-cols-10 gap-3">
      <div className="col-span-3 p-3">
        {items.map((item) => (
          <DraggableItem item={item} key={item.id} />
        ))}
      </div>
      <div className="col-span-5">
        <DroppableItem />
      </div>
      <div className="col-span-2">Actions</div>
    </div>
  );
};

export default PageBuilder;
