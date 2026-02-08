import { Inter } from "next/font/google";

import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast, Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expert Accounting ERP Implementation Partner | JVSM & India",
  description: "Stop managing messy books. As your Accounting ERP implementation partner, JVSM automates your finance with Zoho Books and FEMA compliance services in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
  
          {children}
         
        
        <Toaster />
        <ToastContainer />
      </body>
    </html>
  );
}
