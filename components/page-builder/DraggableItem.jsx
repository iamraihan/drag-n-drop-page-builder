"use client";

import { useDrag } from "react-dnd";
import { Blogs, OptimizeImage } from "@/helpers/ui";
import { itemTypes } from "@/utils";

const DraggableItem = () => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.COMPONENT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <>
      <div
        ref={drag}
        className={`${isDragging ? "opacity-50" : "opacity-100"}`}
      >
        <OptimizeImage imgURL="/assets/blog-01.webp" altLabel="Blog 1" />
        <div className="hidden">
          <Blogs />
        </div>
      </div>
    </>
  );
};

export default DraggableItem;
