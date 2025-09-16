"use client";
import React from "react";

interface ClientCardProps {
  name: string;
  date: string;
  description: string;
  images: string[];
}

const ClientCard: React.FC<ClientCardProps> = ({ name, date, description, images }) => {
  return (
    <div className="border p-4 rounded-md mb-4">
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-500">{date}</p>
      <p>{description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {images.map((src, idx) => (
          <img key={idx} src={src} className="w-24 h-24 object-cover" />
        ))}
      </div>
    </div>
  );
};

export default ClientCard;
