"use client";

import { useState } from "react";
import { createTour } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export default function TourForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTour({ title, description, price });
      router.push("/tours");
    } catch {
      alert("Error al crear tour");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-indigo-700 text-center">
        Nuevo Tour
      </h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors"
      >
        Crear
      </button>
    </form>
  );
}
