"use client";

import {  useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, Cloud, Rocket, Scale,
  ClipboardCheck, SearchCheck,
  Landmark, Users, FileCheck
} from "lucide-react";
import { useState } from "react";




const features = [
   { id:1,
    icon: Cloud,
    title: "CLOUD BASED BOOKKEEPING SERVICES ",
    desc: "We deliver secure, cloud-based bookkeeping with automated accounting processes to ensure accurate records, real-time financial visibility, and streamlined compliance—so you can focus on growing your business.",
    color: "from-sky-500 to-cyan-500",  
  },
   {
    id:2,
    icon: Rocket,
    title: "STARTUP SETUP AND CONSULTANCY",
    desc: "We support startups from day one with entity formation, DPIIT registration, statutory license registrations, and expert consultancy on deal structuring and ESOPs.",
    color: "from-violet-600 to-indigo-500",   
  },
  { id:3,
    icon: TrendingUp,
    title: "VIRTUAL CFO SERVICES",
    desc: "Our Virtual CFO services provide strategic financial leadership that helps businesses grow with confidence and clarity. We act as an extension of your leadership team, delivering senior-level insights that strengthen financial planning, governance, and decision-making.",
    color: "from-indigo-600 to-blue-500", 
  },
 
 
  { id:4,
    icon: Scale,
    title: "Tax, Regulatory, and FEMA Compliance Service",
    desc: "We provide end-to-end tax and regulatory support covering corporate and individual taxation, GST, PF, ESIC, FEMA compliance, and tax representation with litigation support.",
    color: "from-emerald-600 to-green-500",  
  },
   {id:5,
    icon: Users,
    title: "Payroll Services",
    desc: "Remote bookkeeping and accounting services for overseas businesses, ensuring accuracy and efficiency. We manage tax-efficient salary structures, process employee salaries and deductions, and ensure full compliance with local payroll regulations.",
    color: "bg-emerald-600",
  },
  { id:6,
    icon: ClipboardCheck,
    title: "AUDIT AND ASSURANCE SERVICES ",
    desc: "We provide independent and reliable audit services including statutory audit, internal audit, GST audit, operational audit, and management audit to ensure compliance and strengthen governance.",
    color: "from-amber-500 to-yellow-500",   
  },
  { id:7,
    icon: SearchCheck,
    title: "DUE DILIGENCE SERVICES",
    desc: "We provide comprehensive financial due diligence  service to assess a company’s performance and financial position, helping stakeholders make confident, well-informed decisions.",
    color: "from-slate-600 to-gray-500",  
  },
   { id:8,
    icon: Landmark,
    title: "SME Financing & Fundraising",
    desc: "Helping SMEs raise capital and access the right financing solutions, with expert guidance on cash flow, working capital, and financial strategy to drive growth.",
    color: "bg-indigo-600",
  },
 
  { id:9,
    icon: FileCheck,
    title: "Secretarial Services",
    desc: "We manage MCA compliances and draft key agreements, including Term Sheets, SHA/SSA, DSA, and ESOP/ESAR implementation.",
    color: "bg-slate-700",
  },
];

export default function ExpertiseShowcase() {
  useEffect(() => {
  const handleHash = () => {
    const hash = window.location.hash; 
    if (!hash.startsWith("#service-")) return;

    const el = document.querySelector(hash);
    if (!el) return;

  
    const yOffset = -110;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

   
    const id = Number(hash.replace("#service-", ""));
    setActive(id - 1);
  };

  handleHash(); 
  window.addEventListener("hashchange", handleHash); 

  return () => window.removeEventListener("hashchange", handleHash);
}, []);


  const [active, setActive] = useState(null);

  return (
    <section id="services" className=" relative overflow-hidden bg-gray-50 text-black py-18 px-6 md:px-12">
      
     <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
      
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20"
        >
          Our Expertise
        </motion.h2>

   
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = active === index;

            return (
              <motion.div
                 id={`service-${feature.id}`}
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.1 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500
                  ${isActive ? 
                    "bg-white shadow-2xl border-gray-900" :
                    active !== null ? "opacity-60 scale-[0.98]" : "bg-white/80 border-gray-200"
                  }`}
              >
               
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-gray-400 animate-pulse pointer-events-none"></div>
                )}

           
                <div className={`flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.color} transition
                  ${isActive ? "shadow-[0_0_25px_rgba(0,0,0,0.1)] scale-110" : ""}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

              
                <h3 className={`text-xl font-bold mb-3 transition text-black
                  ${isActive ? "text-black drop-shadow-[0_0_6px_rgba(255,255,255,255.8)]" : ""}`}>
                  {feature.title}
                </h3>

             
                <p className={`text-sm leading-relaxed transition
                  ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
