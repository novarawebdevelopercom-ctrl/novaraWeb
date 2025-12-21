// import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";

import HeroSection from "@/pages/landing/sections/heroSection/HeroSection";
import Header from "@/components/layout/landing/Header";
import ServiceSection from "@/pages/landing/sections/serviceSection/ServiceSection";

export default function Home() {
  return (
    <>
    <Header />
      <HeroSection />
      <ServiceSection/>
      </>
  );
}
