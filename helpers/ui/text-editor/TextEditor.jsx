"use client";

import { setItemStyles } from "@/redux/slices/uiDataSlice";
import { useDispatch, useSelector } from "react-redux";

const TextEditor = () => {
  const { selectedText } = useSelector((state) => state.textEditor);
  const { selectedItemStyle } = useSelector((state) => state.uiData);
  console.log("selectedItemStyle: ", selectedItemStyle);

  const dispatch = useDispatch();
  const handleFontSizeChange = (event) => {
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
        >
          <option value="text-xs">Extra Small</option>
          <option value="text-sm">Small</option>
          <option
            value="text-base"
            selected={selectedText.fontSize === "text-base"}
          >
            Medium
          </option>
          <option value="text-lg">Large</option>
          <option value="text-xl">Extra Large</option>
          <option value="text-2xl">2X Large</option>
          <option value="text-3xl">3X Large</option>
        </select>
      </div>
      {/* <label>
        Text Color:
        <input type="color" value={color} onChange={handleColorChange} />
      </label> */}
    </div>
  );
};

export default TextEditor;
