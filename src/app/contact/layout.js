import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";


  


export const metadata = {
  title:
    "Contact Contently Writers: Get in Touch with Us",
  description:'Reach out to Contently Writers for professional writing services. Contact us via phone, email, or our online form for inquiries and support. Ask us anything, we’re here to help you with your content needs.',
  alternates: {
    canonical: "https://www.contentlywriters.com/contact"
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
