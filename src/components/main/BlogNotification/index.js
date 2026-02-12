"use client";
import Link from "next/link";
import { blogData } from "@/components/main/blog";
import { useEffect, useState } from "react";

export default function BlogNotification() {
  const [mounted, setMounted] = useState(false); 
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  const sortedBlogs = [...blogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const blogsToShow = sortedBlogs.slice(0, 3);

  useEffect(() => {
    setMounted(true); 
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (index >= blogsToShow.length) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, blogsToShow.length, mounted]);

  if (!mounted || !show || !blogsToShow[index]) return null;

  const blog = blogsToShow[index];

 return (
  <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 w-[92%] sm:w-full max-w-sm animate-fadeSlide">
    <Link href={`/blog/${blog.slug}`} className="block">
      <div className="
        relative
        backdrop-blur-2xl
        bg-white/95
        border border-black/30
        text-gray-900
        p-4 sm:p-5
        rounded-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.10)]
        transition-all duration-300
        active:scale-[0.97]
        hover:shadow-[0_10px_35px_rgba(0,0,0,0.15)]
      ">

      
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShow(false);
          }}
          className="absolute top-2 right-3 text-gray-700 hover:text-black text-sm"
        >
          ✕
        </button>

  
        <p className="text-[11px] font-semibold text-gray-500 tracking-wide mb-1">
          NEW BLOG UPDATE
        </p>

       
        <h4 className="text-[14px] sm:text-sm font-semibold leading-snug mb-2">
          {blog.heading}
        </h4>

  
        <span className="text-[13px] font-medium text-green-700">
          Read Now →
        </span>
      </div>
    </Link>
  </div>
);


}
