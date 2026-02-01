"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ZohoPartnerSection() {


  

  return (
    <section className="w-full py-24 bg-gray-50 relative overflow-hidden">

      {/* Background subtle blur circles */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="text-green-600 tracking-widest text-sm mb-2 uppercase font-medium">
            Official Partner
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-6">
            We Are an Authorized Zoho Books Partner
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We help businesses streamline accounting, invoicing, GST compliance, and financial management using Zoho Books. Get expert setup, automation, and ongoing support from certified professionals.
          </p>

          {/* Feature Points */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
              <span className="text-gray-700">Certified Zoho Books Experts</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
              <span className="text-gray-700">GST & Compliance Automation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
              <span className="text-gray-700">Ongoing Support & Optimization</span>
            </div>
          </div>

          {/* 🔹 Preview Button */}
          <a
          href="/zoho"
           
            className="px-6 py-3 bg-[#020035] text-white rounded-full shadow-lg hover:bg-black transition"
          >
            View Details
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white p-1 rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-300">
            <Image
              src="/zoho_books.png"
              alt="Zoho Books Partner"
              width={280}
              height={180}
              className="object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>

      

    </section>
  );
}
