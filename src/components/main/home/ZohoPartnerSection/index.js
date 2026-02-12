"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ZohoPartnerSection() {


  

  return (
   <section className="w-full py-24 bg-gray-50 relative overflow-hidden">


  <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[120px] pointer-events-none" />
  <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[100px] pointer-events-none" />

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
   
    <div>
      <Image
        src="/zoho/zoho-logowb.png"
        alt="Official Partner"
        width={150}
        height={150}
        className="object-contain"
      />

      <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug mb-6">
        We Are an Authorized Zoho Books Partner 
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        We help businesses streamline accounting, invoicing, GST compliance, and financial management using Zoho Books. Get expert setup, automation, and ongoing support from certified professionals.
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
          <span className="text-gray-700">Zoho Books–Certified Professionals</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
          <span className="text-gray-700">Seamless Setup and End-to-End Implementation</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
          <span className="text-gray-700">Continuous Support and System Optimization</span>
        </div>
         <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
          <span className="text-gray-700">Customized Reports for Better Decision-Making</span>
        </div>
        
      </div>

      <a
        href="/zoho"
        className="px-6 py-3 bg-black text-green-500 rounded-full shadow-lg hover:text-white transition"
      >
        View Details
      </a>
    </div>

   
    <div className="relative flex justify-center md:justify-end">

     
      <div className="absolute w-[360px] h-[360px] rounded-full border border-green-400/80 animate-spin-slow" />

      
      <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-indigo-400/80 animate-[spin_20s_linear_infinite_reverse]" />


      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-green-200/80 to-indigo-200/80 blur-3xl rounded-full animate-pulse" />

      <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-300">
        <Image
          src="/zoho_books.png"
          alt="Zoho Books Partner"
          width={320}
          height={220}
          className="object-contain rounded-2xl"
        />
      </div>

    </div>
  </div>
</section>

  );
}
