"use client";

import { setSelectedItemStyle } from "@/redux/slices/uiDataSlice";
import { useDispatch, useSelector } from "react-redux";

const CTA = () => {
  const { ctaOne } = useSelector((state) => state.uiData);

  const dispatch = useDispatch();
  const collectionName = "ctaOne";
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {ctaOne.map((item) => (
          <div
            key={item.id}
            className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
          >
            <h1
              className={`flex-grow sm:pr-16 text-2xl font-medium title-font ${
                item?.styles?.title?.fontSize || ""
              } ${item?.styles?.title?.color || ""}`}
              onClick={() =>
                dispatch(
                  setSelectedItemStyle({
                    collectionName,
                    id: item?.id,
                    styles: item?.styles?.title || {},
                    itemKey: "title",
                  })
                )
              }
            >
              {item?.title || ""}
            </h1>
            <button
              className={`flex-shrink-0 ${item?.styles?.button_data?.color} ${item.styles?.button_data?.fontSize}  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0`}
              onClick={() =>
                dispatch(
                  setSelectedItemStyle({
                    collectionName,
                    id: item.id,
                    styles: item?.styles?.button_data || {},
                    itemKey: "button_data",
                  })
                )
              }
            >
              {item.button_data || ""}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;
