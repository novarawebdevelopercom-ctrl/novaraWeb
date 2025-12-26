// import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";

import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";
import Header from "@/components/layout/landing/Header";

import ServiceSection from "@/pages/landing/sections/serviceSection/ServiceSection";

import AboutSection from "@/pages/landing/sections/aboutSection/AboutSection";
import Process from "../pages/landing/sections/ourProcess/Process";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <ServiceSection />

      <AboutSection />
      <Process />
    </>
  );
}
