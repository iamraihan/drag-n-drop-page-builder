"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PreviewPage = () => {
  const { canvasItems } = useSelector((state) => state.pageBuilder);

  useEffect(() => {
    if (canvasItems.length <= 0) {
      redirect("/");
    }
  }, [canvasItems.length]);
  return (
    <section className="bg-white">
      {canvasItems.map((item, index) => (
        <div key={item.id + index}>{<item.component /> || ""}</div>
      ))}
    </section>
  );
};

export default PreviewPage;
