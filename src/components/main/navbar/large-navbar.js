"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LargeNavbar({ items, currentPath }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex items-center gap-8 text-[15px] font-medium">
      {items.map((item) => {
        const isActive = currentPath === item.path;
        const hasDropdown = !!item.dropdown;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setOpen(item.name)}
            onMouseLeave={() => setOpen(null)}
          >
            {/* NORMAL LINK */}
            {!hasDropdown && (
              <Link
                href={item.path}
                className={`relative group transition ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-700 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            )}

            {/* DROPDOWN LINK */}
            {hasDropdown && (
              <>
                <button className="flex items-center gap-1 text-gray-700 hover:text-green-700 transition relative group">
                  {item.name}
                  <ChevronDown size={16} />

                  <span className="absolute left-0 -bottom-1 h-[2px] bg-green-700 w-0 group-hover:w-full transition-all duration-300"></span>
                </button>

                {/* DROPDOWN BOX */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[320px] bg-white border border-gray-200 rounded-xl shadow-xl py-2 transition-all duration-300 z-50
                  ${
                    open === item.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
               {item.dropdown.map((sub, i) => (
  <a
    key={i}
    href={sub.path}
    className="block px-5 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
  >
    {sub.name}
  </a>
))}

                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
