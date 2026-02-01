"use client";

import { Mail, Phone, Linkedin } from "lucide-react";

export default function FoundersSection() {
  return (
    <section id="aboutus" className="bg-gray-50 text-gray-900 py-24 px-6">
      <div className="text-center mb-20">
        <p className="text-green-700 tracking-[4px] text-sm mb-3 uppercase">
          About Us
        </p>
        <h2 className="text-5xl font-bold">Meet Our Founders</h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-28">

 {/* ================= FOUNDER 1 ================= */}

        <div className=" flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-[48%]">
            <div className="border border-gray-300 shadow-lg bg-white">
              <img
                src="/founders/vivek_jain.png"
                alt="CA Vivek Sharma"
                className="w-full h-[520px] object-contain"
              />
            </div>
          </div>

          <div className="md:w-[42%] pt-4">
            <h3 className="text-3xl font-bold mb-2">CA Vivek Sharma</h3>
            <p className="text-gray-600 mb-6">Chartered Accountant</p>

            <div className="space-y-4 text-gray-700">
              <a href="mailto:vivek.sharma@jvsmindia.com" className="flex items-center gap-3 hover:text-black">
                <Mail size={18} /> vivek.sharma@jvsmindia.com
              </a>
              <a href="tel:+919876543211" className="flex items-center gap-3 hover:text-black">
                <Phone size={18} /> +91 73000 69605
              </a>
              <a href="https://www.linkedin.com/in/vivek-sharma-462012194" target="_blank" className="flex items-center gap-3 hover:text-black">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>


        {/* ================= FOUNDER 2 ================= */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
          <div className="md:w-[48%]">
            <div className="border border-gray-300 shadow-lg bg-white">
              <img
                src="/founders/vikash_jain.png"
                alt="CA Vikas Jain"
                className="w-full h-[520px] object-contain"
              />
            </div>
          </div>

          <div className="md:w-[19%] pt-4">
            <h3 className="text-3xl font-bold mb-2">CA Vikas Jain</h3>
            <p className="text-gray-600 mb-6">Chartered Accountant</p>

            <div className="space-y-4 text-gray-700">
              <a href="mailto:vikas.jain@jvsmindia.com" className="flex items-center gap-3 hover:text-black">
                <Mail size={18} /> vikas.jain@jvsmindia.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-black">
                <Phone size={18} /> +91 95499 64985
              </a>
              <a href="https://www.linkedin.com/in/ca-vikas-jain-15a19947/" target="_blank" className="flex items-center gap-3 hover:text-black">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

       
        {/* ================= FOUNDER 3 ================= */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* IMAGE */}
          <div className="md:w-[50%]">
            <div className="border border-gray-300 shadow-lg bg-white">
              <img
                src="/founders/manish_Pawnami.png"
                alt="CA Manish Pawnami"
                className="w-full h-[550px] object-contain rounded-md"
              />
            </div>
          </div>

          {/* INFO */}
          <div className="md:w-[42%] pt-4">
            <h3 className="text-3xl font-bold mb-2">CA Manish Pamnani</h3>
            <p className="text-gray-600 mb-6">Chartered Accountant</p>

            <div className="space-y-4 text-gray-700">
              <a href="mailto:manish.pamnani@jvsmindia.com" className="flex items-center gap-3 hover:text-black">
                <Mail size={18} /> manish.pamnani@jvsmindia.com
              </a>
              <a href="tel:+919876543212" className="flex items-center gap-3 hover:text-black">
                <Phone size={18} /> +91 99876 54321
              </a>
              <a href="https://www.linkedin.com/in/manish-pamnani-77b867b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="flex items-center gap-3 hover:text-black">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
