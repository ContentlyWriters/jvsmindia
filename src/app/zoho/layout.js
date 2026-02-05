import Head from "next/head";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";






export const metadata = {
  title: "Stop Manual Data Entry | Authorized Zoho Books CA Experts",
  description: `Stop drowning in spreadsheets. We provide expert Zoho Analytics 
consulting services and accounting automation solutions to turn your data into 
growth.`,
  keywords: "Accounting ERP implementation partner, Zoho Analytics consulting services, Offshore accounting services, Zoho Books services, Accounting automation solutions",
  alternates: {
    canonical: "https://www.jvsmindia.com/zoho",
  },
};

export default function ZohoLayout({ children }) {
  return (
 
      <div>
        <Head>
          <link rel="canonical" href={metadata.alternates.canonical} />
        </Head>

        <Navbar />
       
 
        <div className="mt-[40px]">{children}</div>
        <Footer />
      </div>

  );
}
