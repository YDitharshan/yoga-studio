import React from "react";
import TopSec from "./section/TopSec";
import Brands from "./section/Brands";
import PortfolioSec from "./section/PortfolioSec";
import FaqSec from "@/components/FaqSec";

const Portfolio = () => {
  const showBrands = false; // change to true if you want it back

  return (
    <>
      <TopSec />
      {showBrands && <Brands />}
      <PortfolioSec />
      <section className="section">
        <FaqSec />
      </section>
    </>
  );
};

export default Portfolio;
