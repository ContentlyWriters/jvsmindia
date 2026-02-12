"use client";
import Image from "next/image";
export default function ZohoPresence() {
  return (
    <section className="relative w-full py-19 pb-4 px-6 text-black overflow-hidden bg-gray-50">

 
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[140px] -z-10"></div>

   
      <div className="text-center mb-24">
        <p className="text-green-700 tracking-[4px] text-sm mb-3 uppercase">
          Official Presence
        </p>
        <h2 className="text-5xl md:text-6xl font-bold bg-black bg-clip-text text-transparent">
          Authorized Zoho Partner
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-28">

    
        <div className="relative">

 
          <div className="hidden md:block absolute -bottom-20 left-[22%] w-5 h-40 bg-gradient-to-b from-gray-400 to-gray-800 rounded shadow-xl"></div>
          <div className="hidden md:block absolute -bottom-20 right-[22%] w-5 h-40 bg-gradient-to-b from-gray-400 to-gray-800 rounded shadow-xl"></div>

 
          <div className="p-[6px] rounded-xl bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">

            <div className="bg-black p-4 rounded-lg border border-gray-700">

              <div className="relative rounded-md overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-20 bg-white/10 blur-xl"></div>

                <Image
                  src="/banners/trust_zoho.jpg"
                  className="w-full h-[440px] object-contain bg-black"
                />
              </div>
            </div>
          </div>

        </div>

        
        <div className="grid md:grid-cols-3 gap-16">

          {[
            { img: "/banners/jaipur_1.jpg", name: "Jaipur – WTP Area" },
            { img: "/banners/jaipur.jpg", name: "Jaipur – Malviya nagar" },
            { img: "/banners/surat.jpg", name: "Surat" },
          ].map((item, i) => (
            <div key={i} className="relative group">

        
              <div className="p-[5px] rounded-lg bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 shadow-[0_15px_50px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] transition">

                <div className="bg-black p-3 rounded border border-gray-700">
                  <div className="relative rounded overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-10 bg-white/10 blur-md"></div>
                    <Image
                      src={item.img}
                      className="h-[240px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="text-center mt-5 text-black tracking-wide">
                {item.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
