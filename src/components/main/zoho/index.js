"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);

          const counter = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(counter);
            } else {
              setCount(end);
            }
          };

          counter();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}

const stats = [
  { value: 90, suffix: "%", label: "Error Reduction" },
  { value: 85, suffix: "x", label: "Faster Processing" },
 { value: [6, 12], suffix: "", label: "Months to ROI", range: true },
  { value: 98, suffix: "%", label: "CFO Adoption" },
];

export default function JVSMConsulting() {
  return (
    <main className="bg-white text-slate-800">

      {/* ================= HERO ================= */}
  <section className="relative py-28 px-6 text-center bg-slate-950 text-white overflow-hidden">

  {/* 🌌 Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 opacity-90" />

  {/* 🌍 Big Wireframe Globe */}
  <div className="absolute -left-1/2 -top-1/4 w-[1380px] h-[1380px] opacity-45 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1496 1360"
      className="w-full h-full animate-spin-slow"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(65,153,234)" stopOpacity="0.5" />
          <stop offset="35%" stopColor="rgb(35,93,147)" stopOpacity="0.5" />
          <stop offset="70%" stopColor="rgb(5,33,60)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Globe Circle */}
      <circle cx="748" cy="680" r="700" fill="url(#globeGradient)" />

      {/* Wireframe Lines */}
      <ellipse cx="748" cy="680" rx="700" ry="180" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
      <ellipse cx="748" cy="680" rx="700" ry="550" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
      <ellipse cx="748" cy="680" rx="180" ry="700" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
      <ellipse cx="748" cy="680" rx="550" ry="700" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
    </svg>
  </div>

  {/* 🌟 Hero Content */}
  <div className="relative z-10 max-w-5xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
      JVSM CONSULTING
    </h1>
    <p className="mt-6 text-xl md:text-2xl text-white/80 drop-shadow-sm">
      Transforming Financial Operations with Intelligent ERP Solutions
    </p>
    <p className="mt-4 text-green-700 font-medium text-lg md:text-xl drop-shadow-sm">
      End-to-End Implementation | Process Automation | Strategic Governance
    </p>
  </div>
</section>




      {/* ================= ERP PARTNER ================= */}
<section className="relative py-32 px-6 overflow-hidden bg-white">

  {/* 🌈 Soft Brand Glow */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[700px] h-[350px] bg-green-500/10 blur-3xl rounded-full"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">

    <div className="relative grid md:grid-cols-2 items-center gap-12 p-14 rounded-[40px] border border-slate-200 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      {/* 🔹 Background Image Texture */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/zoho/bg.jpg"   
          alt="ERP background"
          fill
          className="object-cover"
        />
      </div>

      {/* 🟥 LEFT — ZOHO MAIN BRAND */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="relative w-44 h-24 mb-6 rounded-2xl">
          <Image
            src="/zoho/zoho.webp"
            alt="Zoho"
            fill
            className="object-contain drop-shadow-xl rounded-2xl"
            priority
          />
        </div>

        <p className="text-slate-600 text-lg leading-relaxed">
          Trusted global cloud software suite powering modern business operations.
        </p>
      </div>

      {/* 🟦 RIGHT — ZOHO BOOKS PARTNER */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <div className="relative w-40 h-28 mb-6 p-4 bg-white rounded-2xl shadow-lg border border-slate-200">
          <Image
            src="/zoho/zohobooks-logo.webp"
            alt="Zoho Books"
            fill
            className="object-contain p-3"
            priority
          />
        </div>

        <p className="text-slate-700 text-lg font-medium">
          <span className="font-bold text-black">Best for:</span> Modern SMEs, Cloud-native automation & Remote operations
        </p>

        <div className="mt-4 text-sm text-green-700 font-semibold">
          ROI Timeline: 6–12 Months
        </div>
      </div>

    </div>

    {/* 🔹 Section Title */}
    <div className="text-center mt-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black">
        Our Strategic ERP Partnership
      </h2>
    </div>

  </div>
</section>



      {/* ================= AUTOMATION STATS ================= */}
     <section className="relative py-28 px-6 bg-slate-50 overflow-hidden">

  {/* Subtle background highlight */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20">
      Why Automate Now
    </h2>
   
  </div>

  {/* Stats Grid */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
  {stats.map((item, i) => {
    const [count, ref] = useCountUp(
      item.range ? item.value[1] : item.value,
      2000
    );

    return (
      <div
        key={i}
        ref={ref}
        className="group relative bg-white rounded-2xl p-10 border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 text-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-700 rounded-full group-hover:w-20 transition-all"></div>

        <h3 className="text-5xl font-extrabold text-slate-900 mt-6 group-hover:text-green-700 transition">
          {item.range ? (
            <>
              {Math.floor(count / 2)}–{count}
            </>
          ) : (
            <>
              {count}{item.suffix}
            </>
          )}
        </h3>

        <p className="mt-4 text-slate-600 font-medium tracking-wide">
          {item.label}
        </p>
      </div>
    );
  })}



  </div>
</section>


      {/* ================= CORE SERVICES ================= */}
    <section className="relative py-28 px-6 bg-slate-50 overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/5 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20">
      Our Comprehensive Services
    </h2>
  
  </div>

  {/* Services Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">

    {[
      ["Implementation", "End-to-end setup & go-live"],
      ["Customization", "Tailored workflows and chart of accounts"],
      ["Automation", "Banking, payroll & inventory integrations"],
      ["Migration", "Secure legacy data transition"],
      ["Compliance", "GST, e-invoicing & statutory configuration"],
      ["Support", "Training & MIS dashboards"],
    ].map(([title, desc], i) => (
      <div
        key={i}
        className="group relative bg-white rounded-2xl p-10 border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300"
      >
        {/* Number Badge */}
        <div className="w-14 h-14 rounded-xl bg-green-700/10 text-green-700 flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition">
          {i + 1}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-700 transition">
          {title}
        </h3>

        <p className="text-slate-600 leading-relaxed">
          {desc}
        </p>

        {/* Bottom Accent */}
        <div className="mt-6 h-[2px] w-10 bg-green-700/40 group-hover:w-20 transition-all"></div>
      </div>
    ))}

  </div>
</section>



    {/* ================= ZOHO ANALYTICS SERVICES ================= */}
<section className="relative py-28 px-6 bg-slate-950 text-white overflow-hidden">

  {/* Background Accent Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-600/10 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl text-white font-extrabold text-center mb-20">
      Zoho Analytics Expert Services
    </h2>
   
  </div>

  {/* Services Grid */}
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">

    {[
      {
        title: "Visualize Your Data",
        desc: "Custom dashboards and reports at a glance.",
      },
      {
        title: "Actionable Insights",
        desc: "Turn raw data into smart business decisions.",
      },
      {
        title: "Track Performance",
        desc: "Real-time KPIs and trends for better control.",
      },
      {
        title: "Boost Efficiency",
        desc: "Identify growth opportunities and optimize operations.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 hover:border-green-500/40 transition duration-300"
      >
        <div className="w-14 h-14 rounded-xl bg-green-700/10 border border-green-500/30 flex items-center justify-center text-green-700 font-bold text-lg mb-6">
          {i + 1}
        </div>

        <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition">
          {item.title}
        </h3>

        <p className="text-white/60 leading-relaxed text-lg">
          {item.desc}
        </p>

        <div className="mt-8 h-[2px] w-12 bg-green-500/40 group-hover:w-20 transition-all"></div>
      </div>
    ))}

    {/* ⭐ FEATURED CARD */}
    <div className="md:col-span-2 group relative bg-white backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-12 text-center hover:border-indigo-400 transition duration-300">

      <div className="w-16 h-16 mx-auto rounded-2xl bg-green-700/30 border border-indigo-400/40 flex items-center justify-center text-black font-bold text-xl mb-6">
        ★
      </div>

      <h3 className="text-3xl text-black font-semibold mb-4 group-hover:text-green-700 transition">
        Expert Zoho Support
      </h3>

      <p className="text-black leading-relaxed text-lg max-w-2xl mx-auto">
        Maximize impact with our Zoho Analytics expertise.
      </p>

      <div className="mt-8 h-[2px] w-20 mx-auto bg-green-400/50"></div>
    </div>

  </div>
</section>



   
     {/* ================= WHY CHOOSE JVSM ================= */}
<section className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
  
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-20">
    <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20">
      Why Choose JVSM Consulting
    </h2>
  
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {[
      {
        title: "Deep Domain Experience",
        desc: "Finance & Accounts expertise, not just implementers",
      },
      {
        title: "India & Offshore Focus",
        desc: "Localized compliance setups",
      },
      {
        title: "Risk-Free Methodology",
        desc: "Data integrity & business continuity",
      },
      {
        title: "Proven Results",
        desc: "90% error reduction & quick ROI",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative bg-white border border-slate-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300"
      >
        {/* Number Badge */}
        <div className="absolute -top-6 left-10 bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-xl text-lg font-bold shadow-lg">
          0{i + 1}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-4 group-hover:text-green-700 transition">
          {item.title}
        </h3>

        <p className="text-slate-600 leading-relaxed text-lg">
          {item.desc}
        </p>

        {/* Bottom Accent Line */}
        <div className="mt-8 h-1 w-12 bg-green-700 rounded-full group-hover:w-20 transition-all duration-300"></div>
      </div>
    ))}
  </div>
</section>


  {/* ================= CONTACT SECTION ================= */}
<section className="relative py-28 px-6 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">

  {/* Background depth glow */}
  <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-stretch">

    {/* ================= MAP SIDE ================= */}
    <div className="relative group h-[480px]">
      <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden">

        {/* Top Label */}
        <div className="absolute top-0 left-0 w-full bg-green-700 text-white text-xs tracking-widest uppercase px-6 py-2 z-10">
          Office Location
        </div>

        <iframe
          src="https://www.google.com/maps?q=JVSM%20%26%20Associates%20Jaipur&output=embed"
          className="w-full h-full pt-8"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>

    {/* ================= INFO CARD SIDE ================= */}
    <div className="relative h-[480px]">
      <div className="relative h-full bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-slate-200 p-12 flex flex-col justify-between overflow-hidden">

        {/* Light Accent */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full" />

        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
            JVSM CONSULTING
          </h2>

       

          <div className="space-y-8 mt-8">

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-green-700/10 flex items-center justify-center text-green-700 text-lg">📍</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Office Address</p>
                <p className="text-slate-800 font-medium leading-snug">
                  Rajendra Nagar, Vaishali Nagar,<br /> Jaipur – 302034
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-green-700/10 flex items-center justify-center text-green-700 text-lg">👤</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Contact Person</p>
                <p className="text-slate-800 font-medium">CA VIKAS JAIN</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-green-700/10 flex items-center justify-center text-green-700 text-lg">📞</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Phone</p>
                <a href="tel:+919549964985" className="text-slate-800 font-medium hover:text-green-700 transition">
                  +91  95499 64985
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-green-700/10 flex items-center justify-center text-green-700 text-lg">✉️</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Email</p>
                <a href="mailto:vikas.jain@jvsmindia.com" className="text-slate-800 font-medium hover:text-green-700 transition">
                  vikas.jain@jvsmindia.com
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="h-[2px] w-20 bg-green-700 rounded-full mt-10" />
      </div>
    </div>

  </div>
</section>



    </main>
  );
}
