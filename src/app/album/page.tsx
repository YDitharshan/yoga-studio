"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

// Example image data
const albumData = [
  {
    category: "Album Cover",
    images: [
      "/images/cover1.png",
      "/images/album/cover2.jpg",
      "/images/album/cover3.jpg",
    ],
  },
  {
    category: "Group Photos",
    images: [
      "/images/album/group1.jpg",
      "/images/album/group2.jpg",
      "/images/album/group3.jpg",
    ],
  },
  {
    category: "Person Portraits",
    images: [
      "/images/album/person1.jpg",
      "/images/album/person2.jpg",
      "/images/album/person3.jpg",
    ],
  },
];

const AlbumPage = () => {
  return (
    <section className="section container max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        <h1 className="text-4xl font-bold text-center mb-10">Our Album Works</h1>

        {albumData.map((album, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="border border-neutral-800 rounded-2xl shadow-lg p-6"
          >
            {/* Category Title */}
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {album.category}
            </h2>

            {/* Slideshow Component */}
            <Slideshow images={album.images} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AlbumPage;

// ---------------- Slideshow Component ----------------
const Slideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-xl">
      {/* Image */}
      <Image
        src={images[current]}
        alt={`slide-${current}`}
        fill
        className="object-cover"
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
