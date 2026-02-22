import HeroSection from "@/components/landing/sections/heroSection/HeroSection";

import ServiceSection from "@/components/landing/sections/serviceSection/ServiceSection";

import AboutSection from "@/components/landing/sections/aboutSection/AboutSection";
import Process from "@/components/landing/sections/ourProcess/Process";
import BeforeForm from "@/components/landing/sections/BeforeForm/BeforeForm";
import { ContactSection } from "@/components/landing/sections/contactSection/ContactSection";
function LandingPage() {
  return <>
 
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <Process />
      <BeforeForm />
      <ContactSection />
  </>;
}

export default LandingPage;
