import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";



export const metadata = {
  title:
    "Expert Finance Insights: Zoho, GST & Compliance | JVSM",
     description:` Master your finances with our latest guides on Zoho Books services, 
GST & accounting compliance, and offshore accounting services. Professional advice 
made simple.`
};
export default function BlogLayout({ children }) {

  return (
   
      <div>
        <Navbar />
      
        <div className="mt-[40px]">{children}</div>
        <Footer />
      </div>
  
  );
}
