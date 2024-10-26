"use client";

import { itemTypes } from "@/utils";
import { useDrop } from "react-dnd";

const DroppableItem = () => {
  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.COMPONENT,
    drop: () => console.log("dropped"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div
      ref={drop}
      className={isOver ? "border-2 border-green-400 p-3" : "w-full h-full"}
    ></div>
  );
};

export default DroppableItem;
