"use client";

import { parseItemFromLocalStorage } from "@/utils";
import { useEffect, useState } from "react";

const PreviewPage = () => {
  const [htmlContents, setHtmlContents] = useState([]);

  useEffect(() => {
    setHtmlContents(parseItemFromLocalStorage("htmlContents") || []);
  }, []);

  return (
    <>
      {htmlContents.map((html, index) => (
        <section
          key={index}
          dangerouslySetInnerHTML={{ __html: html }}
        ></section>
      ))}
    </>
  );
};

export default PreviewPage;
