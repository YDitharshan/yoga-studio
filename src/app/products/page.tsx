"use client";

import React, { useState } from "react";
import Image from "next/image";


// Sample product data
const products = [
  { id: 1, name: "Duro Frame 6R", price: "Rs. 1,000", category: "Duro Frame", image: "/images/6RDuro.png" },
  { id: 2, name: "Duro Frame 8x12", price: "Rs. 2,000", category: "Duro Frame", image: "/images/8x12Duro.png" },
  { id: 3, name: "Duro Frame 10x12", price: "Rs. 2,800", category: "Duro Frame", image: "/images/10x12Duro.png" },
  { id: 4, name: "Duro Frame 10x15", price: "Rs. 3,000", category: "Duro Frame", image: "/images/10x15Duro.png" },
  { id: 5, name: "Duro Frame 12x15", price: "Rs. 3,200", category: "Duro Frame", image: "/images/12x15Duro.png" },
  { id: 6, name: "Duro Frame 12x18", price: "Rs. 3,500", category: "Duro Frame", image: "/images/12x18Duro.png" },
  { id: 7, name: "Duro Frame 16x24", price: "Rs. 8,000", category: "Duro Frame", image: "/images/16x24Duro.png" },
  { id: 8, name: "Duro Frame 20x30", price: "Rs. ", category: "Duro Frame", image: "/images/20x30Duro.png" },
  { id: 9, name: "Duro Frame 24x36", price: "Rs. ", category: "Duro Frame", image: "/images/24x36Duro.png" },
  { id: 10, name: "Glass Frame 8x12", price: "Rs. 2,300", category: "Glass Frame", image: "/images/8x12Glass.png" },
  { id: 11, name: "Glass Frame 10x12", price: "Rs. 3,000", category: "Glass Frame", image: "/images/10x12Glass.png" },
  { id: 12, name: "Glass Frame 10x15", price: "Rs. 3,300", category: "Glass Frame", image: "/images/10x15Glass.png" },
  { id: 13, name: "Glass Frame 12x15", price: "Rs. 3,800", category: "Glass Frame", image: "/images/12x15Glass.png" },
  { id: 14, name: "Glass Frame 12x18", price: "Rs. 4,000", category: "Glass Frame", image: "/images/12x18Glass.png" },
  { id: 15, name: "Glass Frame 16x24", price: "Rs. 8,500", category: "Glass Frame", image: "/images/16x24Glass.png" },
  { id: 16, name: "Glass Frame 20x30", price: "Rs. 11,500", category: "Glass Frame", image: "/images/20x30Glass.png" },
  { id: 17, name: "Glass Frame 24x36", price: "Rs. 15,000", category: "Glass Frame", image: "/images/24x36Glass.png" },
  { id: 18, name: "Vintage Duro Frame B1", price: "Rs. 4500", category: "Vintage Duro Frame", image: "/images/products/vintage-duro1.jpg" },
  { id: 19, name: "Vintage Frame B2", price: "Rs. 4000", category: "Vintage Frame", image: "/images/products/vintage1.jpg" },
  { id: 20, name: "Miniature Frame C1", price: "Rs. 1500", category: "Miniature Frame", image: "/images/products/mini1.jpg" },
  { id: 21, name: "Double Frame C2", price: "Rs. 3500", category: "Double Frame", image: "/images/products/double1.jpg" },
  { id: 22, name: "Resin Art D1", price: "Rs. 5500", category: "Resin Art", image: "/images/products/resin1.jpg" },
  { id: 23, name: "Box Frame E1", price: "Rs. 3200", category: "Box Frame", image: "/images/products/box1.jpg" },
  { id: 24, name: "Customized Mug", price: "Rs. 1200", category: "Mugs", image: "/images/products/mug1.jpg" },
];

// Categories
const categories = [
  "All",
  "Duro Frame",
  "Glass Frame",
  "Vintage Duro Frame",
  "Vintage Frame",
  "Miniature Frame",
  "Double Frame",
  "Resin Art",
  "Box Frame",
  "Mugs",
];

const whatsappNumber = "94778454671"; // without + and leading 0 (Sri Lanka format)

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWhatsApp = (productName: string) => {
    const message = `Hello, I'm interested in your product: ${productName}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section container max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <button
                onClick={() => handleWhatsApp(product.name)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Share WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
