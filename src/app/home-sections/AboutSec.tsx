"use client";

import Title from "@/components/Title";
import React from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

const AboutSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title subtitle="About" title="We are Yoga Foto Station" link="Know More" />
        {/* Divider */}
        <Divider />
        {/* Wrapper */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          {/* Banner */}
          <motion.figure variants={fadeInUp}>
            <Image
              src="/images/yogafoto-about-section-banner.png"
              alt="about banner"
              width={783}
              height={710}
            />
          </motion.figure>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            className="border border-neutral-900 p-6 rounded-2xl mt-5"
          >
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src="/images/shape-2.svg"
                  width={30}
                  height={30}
                  alt="shape"
                />
                Who We are
              </h3>
              <p>
                At Yoga Foto Station, photography is more than just images
                it’s a journey of storytelling. What began as a personal passion
                has grown into a lifelong quest to capture the extraordinary within the ordinary.
                Every click of the shutter is an opportunity to freeze fleeting moments and transform them 
                into timeless memories.
              </p>
            </div>
            <div className="grid gap-5 mt-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src="/images/shape-2.svg"
                  width={30}
                  height={30}
                  alt="shape"
                />
                Contact Information
              </h3>

              {/* wrapper */}
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
                {/* email address */}
                <div>
                  <p>Email</p>
                  <a
                    href="mailto:yogafotostation@yahoo.com"
                    className="hover:underline"
                  >
                    yogafotostation@yahoo.com
                  </a>
                </div>
                {/* Phone num */}
                <div>
                  <p>Phone Number</p>
                  <a href="tel:+94 778454671" className="hover:underline">
                    +94 778454671
                  </a>
                </div>
              </div>

              {/* wrapper */}
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between flex-wrap">
                {/* Social icons */}
                <SocialIcons />

                {/* buttons Wrapper */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/album" className="primary-btn w-full text-center">
                    View Our Album Works
                  </Link>
                  <Link href="#" className="primary-btn w-full  text-center">
                    Download Packages
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSec;
