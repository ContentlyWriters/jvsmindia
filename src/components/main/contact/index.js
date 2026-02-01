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
    <section className="relative bg-gradient-to-br from-[#f9fbff] via-white to-[#eef1ff] overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <div className="text-center pt-28 pb-44 px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#020035]">
          Let’s Build Something Great
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Have a project in mind? Need support? Our team is ready to help you.
        </p>
      </div>

      {/* CONTACT CONTAINER */}
      <div className="max-w-6xl mx-auto -mt-32 mb-24 relative z-20">
        <div className="grid md:grid-cols-2 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden backdrop-blur-xl">

          {/* FORM SIDE */}
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

              {/* BUTTON */}
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

          {/* INFO SIDE */}
          <div className="relative bg-[#020035] text-white p-12 md:p-16 flex flex-col justify-between">

            <div>
              <h2 className="text-2xl font-semibold mb-10">Contact Information</h2>

              <div className="space-y-8 text-gray-300">
                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="text-gray-400 mt-1" />
                  <span>B004/132, Sirsi Rd, Hanuman Nagar Extension, Rajendra Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021</span>
                </div>
                <div className="flex gap-4 items-center">
                  <FaPhoneAlt className="text-gray-400" />
                  <span>+91 95499 64985</span>
                </div>
                <div className="flex gap-4 items-center">
                  <FaEnvelope className="text-gray-400" />
                  <span>connect@jvsmindia.com</span>
                </div>
              </div>
            </div>

            {/* Socials */}
           <div className="flex gap-5 mt-16">

  <a
    href="https://www.linkedin.com/company/j-v-s-m-associates/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition"
  >
    <FaLinkedin size={18} />
  </a>

  <a
    href="https://www.instagram.com/jvsm_associates/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61586747323056"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition"
  >
    <FaFacebookF size={18} />
  </a>

</div>


            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#5b6cf2]/30 blur-[120px] rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
