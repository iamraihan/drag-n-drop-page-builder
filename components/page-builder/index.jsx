"use client";

import DraggableItem from "@/components/page-builder/DraggableItem";
import DroppableItem from "@/components/page-builder/DroppableItem";
import { Blogs, CTA, FeaturesOne, TextEditor } from "@/helpers/ui";
import { useSelector } from "react-redux";

const PageBuilder = () => {
  const items = [
    { id: 1, component: Blogs, thumbnail: "/assets/blog-01.webp" },
    { id: 2, component: CTA, thumbnail: "/assets/blog-02.webp" },
    { id: 3, component: FeaturesOne, thumbnail: "/assets/features-01.webp" },
  ];

  const { canvasItems } = useSelector((state) => state.pageBuilder);

  return (
    <div className="container mx-auto grid grid-cols-10 gap-3 mt-3">
      <div className="col-span-3 p-3 overflow-y-auto no-scrollbar scroll-smooth h-screen">
        {items.map((item) => (
          <DraggableItem item={item} key={item.id} />
        ))}
      </div>
      <div className="col-span-5">
        <DroppableItem />
      </div>
      <div className="col-span-2 px-3">
        {canvasItems.length > 0 && <TextEditor />}
      </div>
    </div>
  );
};

export default PageBuilder;
