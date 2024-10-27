"use client";

import { setItemStyles } from "@/redux/slices/uiDataSlice";
import { useDispatch, useSelector } from "react-redux";

const TextEditor = () => {
  const { selectedItemStyle } = useSelector((state) => state.uiData);
  const dispatch = useDispatch();

  const handleFontSizeChange = (event) => {
    if (
      !selectedItemStyle ||
      !selectedItemStyle.itemKey ||
      !selectedItemStyle.styles
    ) {
      alert("Please select an item first");
      return;
    }
    const sizeClass = event.target.value;

    const newStyles = {
      [selectedItemStyle.itemKey]: {
        fontSize: sizeClass,
        color: selectedItemStyle.styles.color,
      },
    };

    dispatch(
      setItemStyles({
        collectionName: selectedItemStyle?.collectionName,
        id: selectedItemStyle.id,
        styles: newStyles,
      })
    );
  };

  const handleColorChange = (event) => {
    if (
      !selectedItemStyle ||
      !selectedItemStyle.itemKey ||
      !selectedItemStyle.styles
    ) {
      alert("Please select an item first");
      return;
    }
    const colorClass = event.target.value;
    const newStyles = {
      [selectedItemStyle.itemKey]: {
        fontSize: selectedItemStyle.styles.fontSize || "",
        color: colorClass,
      },
    };

    dispatch(
      setItemStyles({
        collectionName: selectedItemStyle?.collectionName,
        id: selectedItemStyle.id,
        styles: newStyles,
      })
    );
  };
  return (
    <div className="">
      {/* Font Size Selector */}
      <div className="mb-4 flex flex-col my-3">
        <label htmlFor="fontSize" className="mr-2 text-gray-700 mb-3">
          Select Font Size:
        </label>
        <select
          id="fontSize"
          onChange={handleFontSizeChange}
          className="border border-gray-300 rounded p-2"
          defaultValue="text-base"
        >
          <option value="text-xs">Extra Small</option>
          <option value="text-sm">Small</option>
          <option value="text-base">Medium</option>
          <option value="text-lg">Large</option>
          <option value="text-xl">Extra Large</option>
          <option value="text-2xl">2X Large</option>
          <option value="text-3xl">3X Large</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col my-3">
        <label htmlFor="Color" className="mr-2 text-gray-700 mb-3">
          Select text Color:
        </label>
        <select
          id="Color"
          onChange={handleColorChange}
          className="border border-gray-300 rounded p-2"
          defaultValue="text-black"
        >
          <option value="text-black">Black</option>
          <option value="text-blue-500">Blue</option>
          <option value="text-red-500">Red</option>
          <option value="text-green-600">Green</option>
          <option value="text-purple-500">Purple</option>
          <option value="text-yellow-500">Yellow</option>
        </select>
      </div>
    </div>
  );
};

export default TextEditor;
