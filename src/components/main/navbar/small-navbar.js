"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function SmallNavbar({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <Menu size={26} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 h-16 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-5 gap-2 bg-white">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-700 hover:text-white transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

   
   
      </div>
    </>
  );
}
