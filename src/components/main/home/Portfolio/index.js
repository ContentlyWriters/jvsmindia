"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  { name: "Automobile Industry", img: "/industries/car-being-taking-care-workshop.jpg" },
  { name: "FMCG Industry", img: "/industries/cashier-grocery-store-wearing-mask-gloves-fully-protected-against-corona-virus.jpg" },
  { name: "Tech Companies", img: "/industries/multiethnic-coworkers-looking-revenue-figures-tablet-diverse-office.jpg" },
  { name: "Fashion & Lifestyle", img: "/industries/street-fashion-look-amazing-stylish-traveling-girl-trendy-autumn-outfit-posing-outdoor(1).jpg" },
  { name: "Pharma Industry", img: "/industries/asian-scientists-working-vaccine-creation.jpg" },
  { name: "Media Entertainment", img: "/industries/press-reporter-fallowing-leads-case.jpg" },
  { name: "Manufacturing Industry", img: "/industries/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production.jpg" },
  { name: "Edu-Tech Industry", img: "/industries/group-young-people-doing-experiments-robotics-laboratory-girls-protective-glasses.jpg" },
  { name: "Gaming Applications", img: "/industries/medium-shot-gamer-sitting-chair.jpg" },
  { name: "Healthcare Clinics", img: "/industries/medium-shot-doctor-checking-blood-pressure-female-patient.jpg" },
  { name: "Logistics Companies", img: "/industries/chuttersnap-BNBA1h-NgdY-unsplash.jpg" },
  { name: "Event Tech Companies", img: "/industries/concert-5471816_1280.jpg" },
];

export default function IndustriesSection() {
  return (
    <section id="Industries" className="relative py-24 bg-gray-50 overflow-hidden">
       <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-green-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Industries In Our Portfolio
        </h2>
        <p className="text-gray-700 tracking-[4px] font-bold text-sm mb-3 uppercase">
          We serve diverse industries with tailor-made solutions for maximum impact.
        </p>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
           <motion.div
  key={idx}
  className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.01, delay: idx * 0.1 }}
>
 
  <Image
    src={industry.img}
    alt={industry.name}
    className="w-full h-64 object-cover md:h-72 lg:h-64"
  />


  <div className="absolute bottom-0 left-0 w-full bg-black text-white text-sm md:text-base font-sm py-1 px-2 transition-opacity duration-300 group-hover:opacity-0">
    {industry.name}
  </div>


  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h3 className="text-white text-xl md:text-2xl font-bold text-center px-4">
      {industry.name}
    </h3>
  </div>
</motion.div>

          ))}
        </div>
      </div>

  
      <motion.div
        className="absolute top-[-100px] left-[-80px] w-96 h-96 rounded-full bg-indigo-200/20 animate-pulse -z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-100px] w-72 h-72 rounded-full bg-pink-200/20 animate-pulse -z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
