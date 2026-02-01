"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "Zoho Books and Analytic Experts",
  "Pro Startup Finance Experts",
  "Tech Savvy Tech Ready CA Firm",
  "Accounting ERP implementation partner",
  "we provide cloud-Based Bookkeeping & Accounting Automation Services",
];



export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[420px] sm:h-[460px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-[#0f172a] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 animate-gradientMove" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />
      <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 animate-beam" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl flex flex-col items-center">

        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-white/60 mb-3">
          We are JVSM & Associates
        </p>

        {/* Slide Text */}
        <div className="relative h-[110px] sm:h-[130px] md:h-[150px] w-full flex items-center justify-center">
          {slides.map((title, index) => (
            <h1
              key={index}
              className={`absolute w-full px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight transition-all duration-1000 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <span className="block bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
                {title}
              </span>
            </h1>
          ))}
        </div>

        {/* Buttons → Hidden on small screens */}
       <div className="mt-10 hidden sm:flex justify-center gap-6 relative z-20">

  {/* Contact Page */}
  <Link href="/contact">
    <button className="px-7 py-3 text-sm sm:text-base rounded-full bg-indigo-600 hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30 active:scale-95">
      Get Consultation
    </button>
  </Link>

  {/* Scroll to Services Section on Home */}
  <Link href="/#services">
    <button className="px-7 py-3 text-sm sm:text-base rounded-full border border-white/30 hover:bg-white/10 transition active:scale-95">
      Our Services
    </button>
  </Link>

</div>

      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-8 sm:w-10 bg-indigo-500" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
