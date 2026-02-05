import Head from "next/head";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import BlogNotification from "@/components/main/BlogNotification";





export const metadata = {
  title: " Expert Accounting ERP Implementation Partner | JVSM & India",
  description: ` Stop managing messy books. As your Accounting ERP 
implementation partner, JVSM automates your finance with Zoho Books and FEMA 
compliance services in India.`,
   keywords: "Accounting ERP implementation partner, FEMA compliance services India, Zoho Analytics consulting services, Bookkeeping services for businesses, Accounting automation solutions, Company secretarial services, GST & accounting compliance services",
  alternates: {
    canonical: "https://www.jvsmindia.com",
  },
};

export default function HomeLayout({ children }) {
  return (
 
      <div>
        <Head>
          <link rel="canonical" href={metadata.alternates.canonical} />
        </Head>

        <Navbar />
         <BlogNotification />
        {/* <Popup /> */}
        <div className="mt-[40px]">{children}</div>
        <Footer />
      </div>

  );
}
