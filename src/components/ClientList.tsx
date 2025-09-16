"use client";
import React from "react";
import ClientCard from "./ClientCard";

interface Client {
  name: string;
  date: string;
  description: string;
  images: string[];
}

interface ClientListProps {
  clients: Client[];
}

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <div>
      {clients.length === 0 ? <p>No clients yet.</p> : null}
      {clients.map((client, idx) => (
        <ClientCard key={idx} {...client} />
      ))}
    </div>
  );
};

export default ClientList;
