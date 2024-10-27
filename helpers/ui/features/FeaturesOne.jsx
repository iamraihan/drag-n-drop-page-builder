"use client";

import { setSelectedItemStyle } from "@/redux/slices/uiDataSlice";
import { useDispatch, useSelector } from "react-redux";

const FeaturesOne = () => {
  const { featureOne } = useSelector((state) => state.uiData);
  const dispatch = useDispatch();

  const collectionName = "featureOne";
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {featureOne.map((item) => (
            <div className="p-4 md:w-1/3 flex" key={item?.id}>
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2
                  className={`${item?.styles?.title?.color} ${item.styles?.title?.fontSize} title-font font-medium mb-2`}
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
                </h2>
                <p
                  className={`leading-relaxed text-base ${item?.styles?.description?.color} ${item?.styles?.description?.fontSize}`}
                  onClick={() =>
                    dispatch(
                      setSelectedItemStyle({
                        collectionName,
                        id: item?.id,
                        styles: item?.styles?.description || {},
                        itemKey: "description",
                      })
                    )
                  }
                >
                  {item?.description || ""}
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOne;
