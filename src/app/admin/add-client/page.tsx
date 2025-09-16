"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ClientForm from "@/components/ClientForm";

export default function AddClientPage() {
  const router = useRouter();

  const handleAddClient = () => {
    alert("Client added successfully!");
    router.push("/admin"); // back to dashboard
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Client</h1>
      
      <ClientForm onAddClient={handleAddClient} />

      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={() => router.push("/admin")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
