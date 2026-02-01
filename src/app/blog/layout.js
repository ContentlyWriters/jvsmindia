import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";



export const metadata = {
  title:
    "Blog | jvsmindia"
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
