"use client";

import { setSelectedItemStyle } from "@/redux/slices/uiDataSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Blogs() {
  const { blogOne } = useSelector((state) => state.uiData);
  const dispatch = useDispatch();
  const collectionName = "blogOne";

  return (
    <div className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {blogOne.map((item) => (
            <div
              className="p-12 md:w-1/2 flex flex-col items-start"
              key={item.id}
            >
              <span
                className={`inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 ${
                  item?.styles?.category?.fontSize || ""
                } ${
                  item?.styles?.category?.color || ""
                } font-medium tracking-widest uppercase`}
                onClick={() =>
                  dispatch(
                    setSelectedItemStyle({
                      collectionName,
                      id: item.id,
                      styles: item?.styles?.category || {},
                      itemKey: "category",
                    })
                  )
                }
              >
                {item.category}
              </span>

              <h2
                className={`sm:${
                  item?.styles?.title?.fontSize || ""
                } text-2xl title-font font-medium ${
                  item?.styles?.title?.color || ""
                } mt-4 mb-4`}
                onClick={() =>
                  dispatch(
                    setSelectedItemStyle({
                      collectionName,
                      id: item.id,
                      styles: item?.styles?.title || {},
                      itemKey: "title",
                    })
                  )
                }
              >
                {item.title}
              </h2>

              <p
                className={`leading-relaxed mb-8 ${
                  item?.styles?.description?.fontSize || ""
                } ${item?.styles?.description?.color || ""}`}
                onClick={() =>
                  dispatch(
                    setSelectedItemStyle({
                      collectionName,
                      id: item.id,
                      styles: item?.styles?.description || {},
                      itemKey: "description",
                    })
                  )
                }
              >
                {item.description}
              </p>

              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a
                  href="#"
                  className="text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>

              <a href="#" className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  <span
                    className={`title-font font-medium text-gray-900 ${
                      item?.styles?.author?.fontSize || ""
                    } ${item?.styles?.author?.color || ""}`}
                    onClick={() =>
                      dispatch(
                        setSelectedItemStyle({
                          collectionName,
                          id: item.id,
                          styles: item?.styles?.author || {},
                          itemKey: "author",
                        })
                      )
                    }
                  >
                    {item.author}
                  </span>
                  <span
                    className={`text-gray-400 tracking-widest mt-0.5 uppercase ${
                      item?.styles?.designation?.fontSize || ""
                    } ${item?.styles?.designation?.color || ""}`}
                    onClick={() =>
                      dispatch(
                        setSelectedItemStyle({
                          collectionName,
                          id: item.id,
                          styles: item?.styles?.designation || {},
                          itemKey: "designation",
                        })
                      )
                    }
                  >
                    {item.designation}
                  </span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
