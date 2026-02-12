"use client";
import Image from "next/image";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function FoundersSection() {
  return (
    <section id="aboutus" className="bg-gray-50 text-gray-900 py-20 px-6">
      
   
      <div className="text-center mb-16">
        <p className="text-green-700 tracking-[4px] text-sm mb-3 uppercase">
          About Us
        </p>
        <h2 className="text-5xl font-bold">Meet our Partners</h2>
      </div>

  
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

       
        {[
           {
            name: "CA Vikas Jain",
            role: "Chartered Accountant",
            img: "/founders/vikash_jain.png",
            email: "vikas.jain@jvsmindia.com",
            phone: "+91 95499 64985",
            linkedin: "https://www.linkedin.com/in/ca-vikas-jain-15a19947/",
          },

          {
            name: "CA Vivek Sharma",
            role: "Chartered Accountant",
            img: "/founders/vivek_jain.png",
            email: "vivek.sharma@jvsmindia.com",
            phone: "+91 83870 17043 ",
            linkedin: "https://www.linkedin.com/in/vivek-sharma-462012194",
          },
         
          {
            name: "CA Manish Pamnani",
            role: "Chartered Accountant",
            img: "/founders/manish_Pawnami.png",
            email: "manish.pamnani@jvsmindia.com",
            phone: "+91 99876 54321",
            linkedin: "https://www.linkedin.com/in/manish-pamnani-77b867b3",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
       
            <div className="bg-gray-100">
              <Image
                src={f.img}
                alt={f.name}
                className="w-full h-[420px] object-fill"
              />
            </div>

          
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold">{f.name}</h3>
              <p className="text-gray-600 mb-4">{f.role}</p>

              <div className="space-y-2  text-sm text-gray-700">
                <a href={`mailto:${f.email}`} className="flex items-left justify-left gap-2 hover:text-black">
                  <Mail size={16} /> {f.email}
                </a>
                <a href={`tel:${f.phone}`} className="flex items-left justify-left gap-2 hover:text-black">
                  <Phone size={16} /> {f.phone}
                </a>
                <a href={f.linkedin} target="_blank" className="flex items-left justify-left gap-2 hover:text-black">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
