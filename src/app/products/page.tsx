"use client";

import React, { useState } from "react";
import Image from "next/image";

// Sample product data
const products = [
  { id: 1, name: "Duro Frame A1", price: "Rs. 2500", category: "Duro Frame", image: "/images/products/duro1.jpg" },
  { id: 2, name: "Glass Frame A2", price: "Rs. 3000", category: "Glass Frame", image: "/images/products/glass1.jpg" },
  { id: 3, name: "Vintage Duro Frame B1", price: "Rs. 4500", category: "Vintage Duro Frame", image: "/images/products/vintage-duro1.jpg" },
  { id: 4, name: "Vintage Frame B2", price: "Rs. 4000", category: "Vintage Frame", image: "/images/products/vintage1.jpg" },
  { id: 5, name: "Miniature Frame C1", price: "Rs. 1500", category: "Miniature Frame", image: "/images/products/mini1.jpg" },
  { id: 6, name: "Double Frame C2", price: "Rs. 3500", category: "Double Frame", image: "/images/products/double1.jpg" },
  { id: 7, name: "Resin Art D1", price: "Rs. 5500", category: "Resin Art", image: "/images/products/resin1.jpg" },
  { id: 8, name: "Box Frame E1", price: "Rs. 3200", category: "Box Frame", image: "/images/products/box1.jpg" },
  { id: 9, name: "Customized Mug", price: "Rs. 1200", category: "Mugs", image: "/images/products/mug1.jpg" },
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
