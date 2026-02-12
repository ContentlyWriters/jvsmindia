"use client";

import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import {
 
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6 relative overflow-hidden">
      
     
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

     
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-whie">&copy; {new Date().getFullYear()} jvsmindia.com. All Rights Reserved.</p>
          <p className="text-xs text-whie">Disclaimer: All services by JVSM & Associates are provided as per applicable professional and regulatory standards. Website content is for informational purposes only.</p>
          <p className="text-xs text-lack text-whie font-bold">Powered by  <a href="https://www.contentlywriters.com" target="_blank" className="text-[#5b6cf2] font-semibold underline">ContentlyWriters </a>  </p>
        </div>

      
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61586747323056" target="_blank" className="text-whie hover:text-[#1877F2] transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.linkedin.com/company/j-v-s-m-associates/" target="_blank" className="text-whie hover:text-[#0A66C2] transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/jvsm_associates/" target="_blank" className="text-whie hover:text-[#E1306C] transition-colors">
            <FaInstagram size={20} />
          </a>
          <a  href="https://wa.me/919549964985" target="_blank" className="text-whie hover:text-[#128C7E] transition-colors">
            <FaWhatsapp size={20} />
          </a>
        </div>

      </div>

  
      <div className="mt-8 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-500 rounded-full opacity-30"></div>
    </footer>
  );
}
