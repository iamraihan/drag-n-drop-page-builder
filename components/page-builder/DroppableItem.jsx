"use client";

import { useDrop } from "react-dnd";
import { itemTypes, saveItemToLocalStorage } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { setCanvasItems } from "@/redux/slices/builderSlice";
import { useEffect, useRef } from "react";

const DroppableItem = () => {
  // useSelector
  const { canvasItems } = useSelector((state) => state.pageBuilder);

  // useDispatch
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.COMPONENT,

    drop: (item) => {
      dispatch(setCanvasItems(item));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const itemRefs = useRef([]);
  const captureHtmlData = () => {
    const htmlData = itemRefs.current.map((ref) => ref?.innerHTML || "");
    saveItemToLocalStorage("htmlContents", htmlData);
  };

  useEffect(() => {
    captureHtmlData();
  }, [canvasItems]);

  return (
    <div
      ref={drop}
      className={isOver ? "border-2 border-green-400 p-3" : "w-full h-screen"}
    >
      {canvasItems.map((item, index) => (
        <div key={item.id + index} ref={(el) => (itemRefs.current[index] = el)}>
          {<item.component /> || ""}
        </div>
      ))}
    </div>
  );
};

export default DroppableItem;
