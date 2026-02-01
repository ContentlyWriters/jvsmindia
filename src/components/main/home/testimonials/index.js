"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 bg-gray-50 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-green-700 tracking-[4px] uppercase text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-5xl font-bold text-black">What Our Clients Say</h2>
        </div>

        {/* Testimonials Wrapper */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Testimonial 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-gray-600 shadow-[0_0_60px_rgba(99,102,241,0.2)] transition"
          >
            <Quote className="absolute top-1 right-2 w-10 h-10 text-indigo-400 opacity-100" />
            <p className="text-md leading-relaxed text-black mb-8">
              We have amazing experience working with you. Never feels like we are different company; always you give us a single team. Other than regular continuous support, your support on working capital loan was extraordinary. Wish to walk through the entire journey with your support.
            </p>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Sushil</h4>
              {/* <p className="text-indigo-300 text-sm">Entrepreneur</p> */}
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-gray-600 shadow-[0_0_60px_rgba(34,211,238,0.2)] transition"
          >
            <Quote className="absolute top-1 right-2 w-10 h-10 text-cyan-400 opacity-100" />
            <p className="text-md leading-relaxed text-black mb-8">
              It has been a delight working with JVSM and team. Few major things which helped us:
              <p className="list-disc ml-5 mt-1">
                <li>Team is prompt</li>
                <li>Has simplified all our accounting and reporting</li>
                <li>Uses the right tech tools</li>
                <li>Our internal accounting team went from 5 accountants to 2 after they took over</li>
              </p>
              
            </p>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Vivek Lath</h4>
              {/* <p className="text-cyan-300 text-sm">Director, Corporate Client</p> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
