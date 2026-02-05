import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";


  


export const metadata = {
  title:
    "Stop Stressing Over Taxes | Start Your Automation Journey",
  description:'Tired of messy books? Let’s talk about Accounting automation solutions and ROC & MCA compliance services. Your shortcut to a stress-free business starts here.',
  alternates: {
    canonical: "https://www.jvsmindia.com/contact"
  }
};
export default function ContactLayout({ children }) {
  return (
 
      <div>
       
        <Navbar />
       
        <div >{children}</div>
        <Footer />
      </div>
   
  );
}
