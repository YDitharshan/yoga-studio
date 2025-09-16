"use client";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

import React from "react";

const BioSec = () => {
  return (
    <section className="pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp}>Who We Are</motion.h2>
        <motion.p variants={fadeInUp} className="mt-[30px]">
          At Yoga Foto Station, photography is our way of preserving life’s 
          most meaningful moments. What started as a personal journey has grown into 
          a lifelong passion to capture the extraordinary in the ordinary, to freeze fleeting emotions, 
          and to share stories that last a lifetime.

          Rooted in the heart of Batticaloa, Sri Lanka, we find endless inspiration in the rich culture, 
          vibrant traditions, and breathtaking landscapes that surround us. From intimate portraits to 
          grand celebrations, every photograph we create reflects not just what we see, but what we feel.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BioSec;
