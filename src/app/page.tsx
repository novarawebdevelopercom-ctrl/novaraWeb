 

import HeroSection from "@/components/landing/sections/hero-section/HeroSection";
import Header from "@/components/layout/landing/Header";

import ServiceSection from "@/components/landing/sections/service-section/ServiceSection";
import AboutSection from "@/components/landing/sections/abaut-section/AbautSection";
import Process from "@/components/landing/sections/ourprocess-section/Process";
import BeforeForm from "@/components/landing/sections/beforeform-section/BeforeForm";
import { ContactSection } from "@/components/landing/sections/contact-section/ContactSection";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <ServiceSection />

      <AboutSection />
      <Process />
      <BeforeForm />
      <ContactSection />
     
    </>
  );
}
