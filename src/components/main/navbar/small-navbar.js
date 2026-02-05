"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SmallNavbar({ items }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <div>
      {/* MENU BUTTON */}
      <button onClick={() => setOpen(!open)} className="text-2xl">
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-xl border-t border-gray-200 z-50">
          <div className="flex flex-col p-5 gap-2">

            {items.map((item) => {
              const hasDropdown = !!item.dropdown;

              // NORMAL LINK
              if (!hasDropdown) {
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
                  >
                    {item.name}
                  </Link>
                );
              }

              // DROPDOWN ITEM
              return (
                <div key={item.id} className="flex flex-col">
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === item.name ? null : item.name
                      )
                    }
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-gray-700 hover:bg-green-50"
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition ${
                        dropdownOpen === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen === item.name && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.path}
                          onClick={() => setOpen(false)}
                          className="py-2 px-3 text-sm text-gray-600 hover:text-green-700"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      )}
    </div>
  );
}
