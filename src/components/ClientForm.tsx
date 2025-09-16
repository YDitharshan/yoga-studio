"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Client {
  name: string;
  date: string;
  description: string;
  images: string[];
}

interface Props {
  onAddClient: (client: Client) => void;
}

export default function ClientForm({ onAddClient }: Props) {
  const { register, handleSubmit, reset } = useForm<Client>();
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const onSubmit = (data: Client) => {
    onAddClient({ ...data, images: imagePreviews });
    reset();
    setImagePreviews([]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setImagePreviews(files.map(f => URL.createObjectURL(f)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-800">
      <input
        {...register("name")}
        placeholder="Client Name"
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        {...register("date")}
        type="date"
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        {...register("description")}
        placeholder="Short Description"
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        className="border border-gray-300 rounded-lg p-2 w-full text-gray-800"
      />
      <div className="flex gap-2 flex-wrap">
        {imagePreviews.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="w-20 h-20 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Add Client
      </button>
    </form>
  );
}
