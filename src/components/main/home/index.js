"use client";
import React from "react";
import ZohoPartnerSection from "./ZohoPartnerSection";
import Portfolio from "./Portfolio";
import AboutUs from "./aboutUs";
import Zoho from "./zoho"
import Service from "./service"
import Banner from "./banner";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function HomeScreen() {
  return (
    <>
      <Banner />
      <ZohoPartnerSection />
       <Service />
      <Portfolio />
      <Zoho />
      <AboutUs/>
    
     
    </>
  );
}
