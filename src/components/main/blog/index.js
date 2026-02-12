"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import img1 from "@/assets/blog/image1.jpg";



export const blogData = [

  {
    tag: "blog-1",
    heading: "The Virtual CFO- Why Your 2026 Growth Strategy Needs More Than Just a Tax Filer",
    image: img1,
    about: "I’ll never forget the day Rajesh walked into my office looking like he’d aged five years overnight. His e-commerce business had just crossed ₹10 crore in revenue, but instead of celebrating, he was drowning in problems he didn't even know existed six months earlier. ",
    slug: "Virtual-CFO-vs-Tax-Filer-Strategic-2026-Growth-Strategies",
    date: "2026-02-12",
  },
];

const itemsPerPage = 9;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const currentBlogs = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

 return (
  <div className="px-4 sm:px-10 lg:px-[50px] bg-gradient-to-b from-[#f8f9ff] to-white">
    <div className="max-w-[1280px] mx-auto">

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
        {currentBlogs.map((item, index) => (
          <Link href={`/blog/${item.slug}`} key={index}>
            <div
              id={item.tag}
              className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-[#5b6cf2]/40 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(91,108,242,0.25)] transition-all duration-500 flex flex-col min-h-[520px] cursor-pointer"
            >
         
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#5b6cf2]/10 via-transparent to-[#00c6ff]/10 pointer-events-none" />

            
              <div className="relative w-full h-[230px] overflow-hidden">
                <Image
                  src={item.image}
                  alt="blog image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

             
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            
                <span className="absolute top-4 left-4 bg-white/90 text-black text-xs font-medium px-3 py-1 rounded-full shadow">
                  {item.tag}
                </span>
              </div>

            
              <div className="flex flex-col flex-1 p-7">
                <h1 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300 leading-snug">
                  {item.heading}
                </h1>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.about}
                </p>

            
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-400">{item.date}</span>

                  <div className="flex items-center gap-2 text-green-700 group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-medium">Read</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

  
      <div className="flex justify-center sm:justify-end mt-10 mb-16">
        <div className="flex items-center gap-2 bg-white shadow-md rounded-full px-3 py-2 border border-gray-200">

       
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-sm transition ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            «
          </button>

         
          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .filter((page) => {
              return (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              );
            })
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  currentPage === page
                    ? "bg-black text-white shadow"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

     
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full text-sm transition ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            »
          </button>
        </div>
      </div>
    </div>
  </div>
);
}