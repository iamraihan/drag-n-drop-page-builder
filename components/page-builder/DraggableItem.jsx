"use client";

import { useDrag } from "react-dnd";
import { OptimizeImage } from "@/helpers/ui";
import { itemTypes } from "@/utils";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.COMPONENT,
    item: { ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <>
      <section
        ref={drag}
        className={`${
          isDragging ? "opacity-50" : "opacity-100"
        } cursor-grab shadow-sm mb-5 `}
      >
        <OptimizeImage
          imgURL={item.thumbnail}
          altLabel="Blog 1"
          borderRadius="10px"
        />
      </section>
    </>
  );
};

export default DraggableItem;
