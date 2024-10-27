"use client";

import { ChevronLeft, ExternalLink } from "@/helpers/ui/custom-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="shadow">
      <div className="flex items-center justify-between container">
        <h1 className="my-5 text-2xl font-semibold text-center">
          Page Builder
        </h1>
        {pathname.includes("preview") ? (
          <Link href="/" className="inline-flex items-center gap-1">
            <span>
              <ChevronLeft />
            </span>
            Back to page builder
          </Link>
        ) : (
          <Link
            className="inline-flex items-center gap-2  text-lg text-blue-600 hover:underline"
            href="/preview"
            target="_blank"
          >
            Preview
            <span>
              <ExternalLink />
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
