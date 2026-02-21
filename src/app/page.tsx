// import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";

import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";
import Header from "@/components/layout/landing/Header";

import ServiceSection from "@/pages/landing/sections/serviceSection/ServiceSection";

import AboutSection from "@/pages/landing/sections/aboutSection/AboutSection";
import Process from "../pages/landing/sections/ourProcess/Process";
import BeforeForm from "@/pages/landing/sections/BeforeForm/BeforeForm";
import { ContactSection } from "@/components/landing/sections/contactSection/ContactSection";

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
