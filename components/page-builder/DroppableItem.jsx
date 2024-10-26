"use client";

import { itemTypes } from "@/utils";
import { useState } from "react";
import { useDrop } from "react-dnd";

const DroppableItem = () => {
  const [canvasItems, setCanvasItems] = useState([]);

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
      {canvasItems.map((item, index) => (
        <div key={item.id + index}>{<item.component />}</div>
      ))}
    </div>
  );
};

export default DroppableItem;
