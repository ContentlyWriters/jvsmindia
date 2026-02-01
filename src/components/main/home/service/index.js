"use client";


import { motion } from "framer-motion";
import {
  TrendingUp, Cloud, Rocket, Scale,
  ClipboardCheck, SearchCheck,
  Landmark, Users, FileCheck
} from "lucide-react";
import { useState } from "react";


const features = [
  {
    icon: TrendingUp,
    title: "VIRTUAL CFO SERVICES",
    desc: "Drive growth with financial reporting and MIS services including business plan development and projections. As your strategic partner, we manage banking relationships, accurate budgeting, risk assessment, and decision-making to scale your financial operations effectively.",
    color: "from-indigo-600 to-blue-500",   // growth + trust
  },
  {
    icon: Cloud,
    title: "CLOUD BASED BOOKKEEPING SERVICES ",
    desc: "We provide expert Zoho Books services and cloud accounting services to streamline your finances. Our team delivers accounting automation solutions and Zoho accounting automation, managing reconciliations, accounts receivable, and comprehensive payable management for businesses. ",
    color: "from-sky-500 to-cyan-500",   // cloud + tech
  },
  {
    icon: Rocket,
    title: "STARTUP SETUP AND CONSULTANCY",
    desc: "Navigate early-stage hurdles with our offshore accounting services and startup consultancy. We handle entity formation, DPIIT registration, and license acquisition, while providing expert advice on deal structuring and the implementation of strategic ESOP frameworks. ",
    color: "from-violet-600 to-indigo-500",   // growth acceleration
  },
  {
    icon: Scale,
    title: "TAX AND REGULATORY SERVICES ",
    desc: "Our GST & accounting compliance services cover corporate and individual taxation. We offer robust tax representation and litigation support, ensuring seamless management of Professional Tax, PF, and ESIC while maintaining full regulatory alignment.",
    color: "from-emerald-600 to-green-500",   // money + balance
  },
  {
    icon: ClipboardCheck,
    title: "AUDIT AND ASSURANCE SERVICES ",
    desc: "Ensure transparency with our statutory compliance management services. We provide comprehensive Statutory, Internal, and GST audits. Our operational and management audit services guarantee that your business maintains the highest standards of financial integrity.",
    color: "from-amber-500 to-yellow-500",   // support + attention
  },
  {
    icon: SearchCheck,
    title: "DUE DILIGENCE SERVICES",
    desc: "We offer an in-depth analysis of financial health to facilitate efficient decision-making. Our offshore accounting services experts review performance and position, ensuring that every investment or partnership is backed by an informed, accurate judgment. ",
    color: "from-slate-600 to-gray-500",   // reliability + trust
  },
   {
    icon: Landmark,
    title: "SME Financing & Fundraising",
    desc: "Secure your future with strategic advice on bank loans and supply chain financing. We act as your Accounting ERP implementation partner to optimize cash flow and profitability while assessing specific funding requirements for SMEs.",
    color: "bg-indigo-600",
  },
  {
    icon: Users,
    title: "Payroll Services",
    desc: "Optimize your workforce management with tax-efficient salary structures and precise processing. We ensure strict compliance with local laws, handling all employee deductions and taxes as part of our integrated accounting automation solutions for payroll.",
    color: "bg-emerald-600",
  },
  {
    icon: FileCheck,
    title: "Secretarial Services",
    desc: "Stay compliant with our ROC & MCA compliance services and company secretarial services. We handle all MCA filings and the drafting of critical legal agreements, including Term Sheets, SHA/SSA, and ESOP implementation for your entity.",
    color: "bg-slate-700",
  },
];

export default function ExpertiseShowcase() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className=" relative overflow-hidden bg-gray-50 text-black py-28 px-6 md:px-12">
      
     <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20"
        >
          Our Expertise
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = active === index;

            return (
              <motion.div
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
                {/* Glow Border Effect */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-gray-400 animate-pulse pointer-events-none"></div>
                )}

                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.color} transition
                  ${isActive ? "shadow-[0_0_25px_rgba(0,0,0,0.1)] scale-110" : ""}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 transition text-black
                  ${isActive ? "text-black drop-shadow-[0_0_6px_rgba(255,255,255,255.8)]" : ""}`}>
                  {feature.title}
                </h3>

                {/* Description */}
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
