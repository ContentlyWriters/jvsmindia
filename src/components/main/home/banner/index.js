"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChartLine, FaCloud, FaRobot, FaShieldAlt } from "react-icons/fa";

/* -------- COUNT UP HOOK -------- */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

/* -------- SLIDES -------- */
const slides = [
  "Zoho Books and Analytics Experts",
  "Pro Startup Finance Experts",
  "Tech Savvy Tech Ready CA Firm",
  "Accounting ERP implementation partner",
  "cloud-Based Bookkeeping Service Provider",
  "Accounting Automation Service Provider",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const clients = useCountUp(90);
  const accuracy = useCountUp(85);
  const speed = useCountUp(98);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
 <section
  className="relative h-[420px] sm:h-[500px] lg:h-[620px] flex items-start sm:items-center justify-center pt-20 sm:pt-0 overflow-hidden bg-[#0b1120] text-white"


      onMouseMove={(e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        e.currentTarget.style.backgroundPosition = `${x}px ${y}px`;
      }}
    >
      {/* 🌌 DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow blobs */}
      <div className="absolute w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[160px] top-[-300px] left-[-300px]" />
      <div className="absolute w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[160px] bottom-[-250px] right-[-250px]" />

    

   
     

      {/* ⭐ CONTENT */}
      <div className="relative z-10 text-center px-6 w-full max-w-6xl flex flex-col items-center">

        <p className="uppercase font-bold tracking-[0.45em] text-xs sm:text-sm text-indigo-300 mb-4">
          JVSM & ASSOCIATES
        </p>

        {/* Animated Slide Heading */}
       <div className="relative h-[120px] sm:h-[160px] w-full flex items-center justify-center">

          {slides.map((title, index) => (
            <h1
              key={index}
             className={`absolute w-full px-6 text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight transition-all duration-1000 ${

                index === current
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                {title}
              </span>
            </h1>
          ))}
        </div>

       

        {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 sm:px-0">

          <Link href="/contact">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold bg-white text-black  hover:scale-105 transition ">
              Get Consultation
            </button>
          </Link>
          <Link href="/#services">
            <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              Explore Services
            </button>
          </Link>
        </div>

        {/* Glass SaaS Card */}
        <div className="mt-16 hidden lg:block w-[650px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 text-left relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />
          <p className="text-sm text-white/50 mb-3">Performance Impact Metrics</p>

          <div className="grid grid-cols-3 gap-6 text-sm relative z-10">
            <div>
              <p className="text-indigo-300 font-bold text-2xl">{clients}%</p>
             Error Reduction
            </div>
            <div>
              <p className="text-indigo-300 font-bold text-2xl">{accuracy}x</p>
              Faster Processing
            </div>
            <div>
              <p className="text-indigo-300 font-bold text-2xl">{speed}%</p>
             CFO Adoption
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
