"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ClientCard from "@/components/ClientCard";

interface Client {
  id: number;
  name: string;
  date: string;
  description: string;
  images: string[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: "John Doe", date: "2025-09-01", description: "Wedding photoshoot", images: [] },
    { id: 2, name: "Jane Smith", date: "2025-08-15", description: "Birthday party", images: [] },
  ]);

  const handleDelete = (id: number) => setClients(clients.filter(c => c.id !== id));
  const handleEdit = (id: number) => alert("Edit client " + id);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome, Admin!</h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Manage all client projects below</p>
        <button
          onClick={() => router.push("/admin/add-client")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
        >
          Add New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map(client => (
          <div key={client.id} className="bg-white shadow-lg rounded-lg p-5 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-xl text-gray-800 mb-1">{client.name}</h2>
              <p className="text-gray-500 text-sm mb-2">{client.date}</p>
              <p className="text-gray-700 mb-3">{client.description}</p>
              <div className="flex flex-wrap gap-2">
                {client.images.map((img, idx) => (
                  <img key={idx} src={img} alt="" className="w-20 h-20 object-cover rounded" />
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(client.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(client.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
