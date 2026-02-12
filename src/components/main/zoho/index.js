"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {Settings,SlidersHorizontal,Zap,Database,ShieldCheck,Headphones,} from "lucide-react";
import { BarChart3, LineChart, Gauge, TrendingUp } from "lucide-react";
import { Briefcase, Globe } from "lucide-react";
import { Users, GitBranch } from "lucide-react";


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

function StatCard({ item }) {
  const [count, ref] = useCountUp(
    item.range ? item.value[1] : item.value,
    2000
  );

  return (
    <div
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
}

export default function JVSMConsulting() {
  return (
    <main className="bg-white text-slate-800">

    
  <section className="relative py-28 px-6 text-center bg-slate-950 text-white overflow-hidden">

 
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 opacity-90" />


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

   
      <circle cx="748" cy="680" r="700" fill="url(#globeGradient)" />

     
      <ellipse cx="748" cy="680" rx="700" ry="180" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
      <ellipse cx="748" cy="680" rx="700" ry="550" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
      <ellipse cx="748" cy="680" rx="180" ry="700" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
      <ellipse cx="748" cy="680" rx="550" ry="700" stroke="white" strokeOpacity="0.5" fill="none" strokeWidth="1" />
    </svg >
  </div>

 
  <div className="relative z-10 max-w-5xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
      JVSM & ASSOCIATES
    </h1>
    <p className="mt-6 text-xl md:text-2xl text-white/80 drop-shadow-sm">
      Transforming Financial Operations with Intelligent ERP Solutions
    </p>
    <p className="mt-4 text-green-700 font-medium text-lg md:text-xl drop-shadow-sm">
      End-to-End Implementation | Process Automation | Strategic Governance
    </p>
  </div>
</section>




   
<section className="relative py-32 px-6 overflow-hidden bg-white">


  <div className="absolute inset-0 flex justify-center">
    <div className="w-[700px] h-[350px] bg-green-500/10 blur-3xl rounded-full"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">

    <div className="relative grid md:grid-cols-2 items-center gap-12 p-14 rounded-[40px] border border-slate-200 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

    
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/zoho/bg.jpg"   
          alt="ERP background"
          fill
          className="object-cover"
        />
      </div>

   
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
          <span className="font-bold text-black">Best for:</span> Modern SMEs, Cloud-native automation, Remote operations & Start-ups 
        </p>

        <div className="mt-4 text-sm text-green-700 font-semibold">
          ROI Timeline: 6–12 Months
        </div>
      </div>

    </div>

   
    

  </div>
</section>



  
     <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">


  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-3xl rounded-full"></div>

  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20">
      Why Automate Now
    </h2>
   
  </div>


<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
  {stats.map((item) => (
    <StatCard key={item.label} item={item} />
  ))}
</div>


 
</section>


  
   <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">


  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-500/5 blur-3xl rounded-full"></div>

<div className="text-center mb-6 relative z-10 flex justify-center">
  <div className="flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-2 rounded-full">
    <img
      src="/zoho/zohobooks-logo-wb.png"
      alt="Zoho Partner"
      className="h-12 w-auto object-contain"
    />
   
  </div>
</div>


  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl text-black font-extrabold">
      Our Comprehensive Services
    </h2>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">

    {[
      {
        title: "Implementation",
        desc: "End-to-end setup & go-live",
        icon: Settings,
      },
      {
        title: "Customization",
        desc: "Tailored workflows and chart of accounts",
        icon: SlidersHorizontal,
      },
      {
        title: "Automation",
        desc: "Banking, payroll & inventory integrations",
        icon: Zap,
      },
      {
        title: "Migration",
        desc: "Secure legacy data transition",
        icon: Database,
      },
      {
        title: "Compliance",
        desc: "GST, e-invoicing & statutory configuration",
        icon: ShieldCheck,
      },
      {
        title: "Support",
        desc: "Training & MIS dashboards",
        icon: Headphones,
      },
       {
        title: "Automated reports",
        desc: "Automatically generated financial reports providing real-time insights into performance, cash flow, and business health.",
        icon: BarChart3,
      },
       {
        title: "Customer and vendor portal",
        desc: "Secure portal access for customers and vendors to track invoices, payments, statements, easily.",
        icon: Users,
      },
       {
        title: "Branch level P&L",
        desc: "Branch-level analysis of financial results to support performance tracking and decision-making.",
        icon: GitBranch,
      },
    ].map((service, i) => {
      const Icon = service.icon;
      return (
        <div
          key={i}
          className="group relative bg-white rounded-2xl p-10 border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300"
        >
     
          <div className="w-14 h-14 rounded-xl bg-green-700/10 text-green-700 flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <Icon size={26} strokeWidth={1.8} />
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-700 transition">
            {service.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {service.desc}
          </p>

       
          <div className="mt-6 h-[2px] w-10 bg-green-700/40 group-hover:w-20 transition-all"></div>
        </div>
      );
    })}

  </div>
</section>




<section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white overflow-hidden">


  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>

<div className="text-center mb-6 relative z-10 flex justify-center">
  <div className="flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-2 rounded-full">
    <img
      src="/zoho/zoho-analytics.png"
      alt="Zoho Partner"
      className="h-12 w-auto object-contain"
    />
   
  </div>
</div>

  <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl text-white font-extrabold text-center mb-20">
      Zoho Analytics Expert Services
    </h2>
   
  </div>


  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">

  
    {[
  {
    title: "Visualize Your Data",
    desc: "Custom dashboards and reports at a glance.",
    icon: BarChart3,
  },
  {
    title: "Actionable Insights",
    desc: "Turn raw data into smart business decisions.",
    icon: LineChart,
  },
  {
    title: "Track Performance",
    desc: "Real-time KPIs and trends for better control.",
    icon: Gauge,
  },
  {
    title: "Boost Efficiency",
    desc: "Identify growth opportunities and optimize operations.",
    icon: TrendingUp,
  },
].map((item, i) => {
  const Icon = item.icon;
  return (
    <div
      key={i}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 hover:border-blue-400/40 transition duration-300"
    >
    
      <div className="w-14 h-14 rounded-xl bg-black/40 border border-blue-400/30 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-300 transition">
        {item.title}
      </h3>

      <p className="text-white/70 leading-relaxed text-lg">
        {item.desc}
      </p>

      <div className="mt-8 h-[2px] w-12 bg-green-400/40 group-hover:w-20 transition-all"></div>
    </div>
  );
})}



   <div className="md:col-span-2 group relative bg-white text-slate-900 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-12 text-center hover:border-blue-500 transition duration-300">

  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-600 text-xl mb-6">
    <BarChart3 size={28} />
  </div>

  <h3 className="text-3xl font-semibold mb-4 group-hover:text-blue-600 transition">
    Expert Zoho Analytics Support
  </h3>

  <p className="leading-relaxed text-lg max-w-2xl mx-auto text-slate-600">
    Maximize impact with our Zoho Analytics expertise.
  </p>

  <div className="mt-8 h-[2px] w-20 mx-auto bg-blue-500/40"></div>
</div>
</div>
</section>



   

<section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
  

  <div className="text-center max-w-3xl mx-auto mb-20">
    <h2 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20">
      Why Choose JVSM & Associates?
    </h2>
  
  </div>


  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {[
  {
    title: "Deep Domain Experience",
    desc: "Finance & Accounts expertise, not just implementers",
    icon: Briefcase,
  },
  {
    title: "India & Offshore Focus",
    desc: "Localized compliance setups",
    icon: Globe,
  },
  {
    title: "Risk-Free Methodology",
    desc: "Data integrity & business continuity",
    icon: ShieldCheck,
  },
  {
    title: "Proven Results",
    desc: "90% error reduction & quick ROI",
    icon: BarChart3,
  },
]
.map((item, i) => {
  const Icon = item.icon;  

  return (
    <div
      key={i}
      className="group relative bg-white border border-slate-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300"
    >
  
      <div className="absolute -top-6 left-10 bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 transition">
        <Icon size={22} />
      </div>

      <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-4 group-hover:text-green-700 transition">
        {item.title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-lg">
        {item.desc}
      </p>

      <div className="mt-8 h-1 w-12 bg-green-700 rounded-full group-hover:w-20 transition-all duration-300"></div>
    </div>
  );
})}

  </div>
</section>


 



    </main>
  );
}
