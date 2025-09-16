import React from "react";
import HeroSec from "./home-sections/HeroSec";
import AboutSec from "./home-sections/AboutSec";
import ServicesSec from "./home-sections/ServicesSec";
import PortfolioSec from "./home-sections/PortfolioSec";
import FaqSec from "@/components/FaqSec";
import TestimonialsCard from "@/components/TestimonialsCard";
import OurTeam from "./home-sections/OurTeam";

const Home = () => {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <ServicesSec />
      <PortfolioSec />

      {/* FAQ section */}
      <section className="section">
        <FaqSec />
      </section>

      {/* Testimonials section */}
      <section className="section">
        <TestimonialsCard />
      </section>

      {/* Our Team section */}
      <OurTeam />
    </>
  );
};

export default Home;
