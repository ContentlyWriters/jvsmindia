"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";

export default function ContactSection() {

  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setBtnStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setBtnStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setBtnStatus("idle"), 3000);
      } else {
        setBtnStatus("error");
      }
    } catch {
      setBtnStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
    <section className="relative bg-gradient-to-br from-[#f9fbff] via-white to-[#eef1ff] overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <div className="text-center pt-28 pb-44 px-6 relative z-10">
       <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
  Get in Touch with Our <br />
  <span className="text-green-600">Professional Team</span>
</h1>

       
      </div>

      {/* CONTACT CONTAINER */}
    {/* CONTACT CONTAINER */}
<div className="max-w-6xl mx-auto -mt-32 mb-24 relative z-20">
  <div className="grid md:grid-cols-2 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden">

    {/* ================= FORM SIDE ================= */}
    <div className="bg-white p-12 md:p-16">
      <h2 className="text-2xl font-semibold text-[#020035] mb-10">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid md:grid-cols-2 gap-6">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-[#f5f7ff] focus:bg-white border border-transparent focus:border-black outline-none transition" />
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-[#f5f7ff] focus:bg-white border border-transparent focus:border-black outline-none transition" />
        </div>

        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject"
          className="w-full px-4 py-3 rounded-lg bg-[#f5f7ff] focus:bg-white border border-transparent focus:border-black outline-none transition" />

        <textarea name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-[#f5f7ff] focus:bg-white border border-transparent focus:border-black outline-none transition" />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl text-white text-lg transition-all duration-300 shadow-lg
            ${btnStatus === "success" ? "bg-green-600" :
            btnStatus === "error" ? "bg-red-600" :
            loading ? "bg-gray-500 cursor-not-allowed" :
            "bg-black hover:scale-[1.02]"}`}
        >
          {loading ? "Sending..." :
           btnStatus === "success" ? "Message Sent ✓" :
           btnStatus === "error" ? "Failed — Try Again" :
           "Send Message"}
        </button>
      </form>
    </div>

    {/* ================= INFO + MAP SIDE ================= */}
    <div className="bg-[#020035] text-white p-8 md:p-8 flex flex-col gap-10">

      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>

        <div className="space-y-2 text-gray-300">

          {/* <div className="flex gap-4 items-start">
            <FaMapMarkerAlt className="text-green-400 mt-1" />
            <span>
              Rajendra Nagar, Vaishali Nagar,<br/> Jaipur – 302034
            </span>
          </div> */}

          <div className="flex gap-4 items-center">
            <FaPhoneAlt className="text-green-400" />
            <a href="tel:+919549964985" className="hover:text-white">
              +91 95499 64985
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <FaEnvelope className="text-green-400" />
            <a href="mailto:connect@jvsmindia.com" className="hover:text-white">
              connect@jvsmindia.com
            </a>
          </div>

        </div>
      </div>

      {/* Social Media */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-400 ">Follow Us</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/j-v-s-m-associates/" target="_blank"
            className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jvsm_associates/" target="_blank"
            className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61586747323056" target="_blank"
            className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition">
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-[220px]">
        <iframe
          src="https://www.google.com/maps?q=JVSM%20%26%20Associates%20Jaipur&output=embed"
          className="w-full h-full"
          loading="lazy"
        />
      </div>

    </div>
  </div>
</div>

      
    </section>
 

    </>
  );
}
