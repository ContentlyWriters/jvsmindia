"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LargeNavbar from "./large-navbar";
import SmallNavbar from "./small-navbar";

const items = [
  { id: 1, name: "Home", path: "/" },

  {
    id: 2,
    name: "Services",
    dropdown: [
      { name: "Cloud Based Bookkeeping Services", path: "/#service-1" },
      { name: "Startup Setup & Consultancy", path: "/#service-2" },
      { name: "Virtual CFO Services", path: "/#service-3" },
      { name: "TAX & Regulatory Services", path: "/#service-4" },
      { name: "Payroll Services", path: "/#service-5" },
      { name: "Audit & Assurance Services", path: "/#service-6" },
      { name: "Due Diligence Services", path: "/#service-7" },
      { name: "SME Financing & Fundraising", path: "/#service-8" },
      { name: "Secretarial Services", path: "/#service-9" },
    ],
  },

  { id: 3, name: "About Us", path: "/#aboutus" },
  { id: 4, name: "Industries", path: "/#Industries" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];



export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 Large Screen Navbar */}
      <div
        className={`hidden lg:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-200 backdrop-blur-xl"
            : "bg-white "
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center px-8 transition-all duration-300 ${
            isScrolled ? "h-14" : "h-14"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mt-1">
            <Image
              src="/jvsmindialogo.png"
              alt="JVSMINDIA Logo"
              width={320}
              height={280}
              className="h-32 w-auto object-contain"
              priority
            />
          </div>

          {/* Nav Links */}
          <LargeNavbar items={items} currentPath={pathname} />
        </div>
      </div>

      {/* 🔹 Small Screen Navbar */}
      <div className="block lg:hidden fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200">
        <div className="flex justify-between items-center px-4 h-14 ">
          <Image
            src="/jvsmindialogo.png"
            alt="Logo"
            width={110}
            height={36}
            className="h-28 w-auto mt-2"
          />
          <SmallNavbar items={items} />
        </div>
      </div>
    </>
  );
}
