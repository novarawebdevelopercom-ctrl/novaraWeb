// import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";

import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";
import Header from "@/components/layout/landing/Header";
import AboutSection from "@/pages/landing/sections/aboutSection/AboutSection";
import Process from "../pages/landing/sections/ourProcess/Process";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Process />
    </>
  );
}
