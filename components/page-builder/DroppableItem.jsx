"use client";

import { itemTypes } from "@/utils";
import { useState } from "react";
import { useDrop } from "react-dnd";

const DroppableItem = () => {
  const [canvasItems, setCanvasItems] = useState([]);
  console.log("canvasItems: ", canvasItems);

  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.COMPONENT,
    drop: (item) => {
      setCanvasItems((prevItems) => [...prevItems, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={isOver ? "border-2 border-green-400 p-3" : "w-full h-screen"}
    >
      {canvasItems.map((item) => (
        <div key={item.id}>{<item.component />}</div>
      ))}
    </div>
  );
};

export default DroppableItem;
