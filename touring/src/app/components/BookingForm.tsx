"use client";

import { useState } from "react";
import { BookingRequest } from "@/app/types/booking";
import { createBooking } from "@/app/lib/api";

export default function BookingForm() {
  const [form, setForm] = useState<BookingRequest>({
    name: "",
    email: "",
    date: "",
    tourName: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await createBooking(form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        date: "",
        tourName: "",
      });
    } catch (err) {
      alert("Error al crear la reserva");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 shadow-md space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-indigo-700">Nueva Reserva</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />

      <input
        type="text"
        name="tourName"
        placeholder="Nombre del tour"
        value={form.tourName}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        {loading ? "Guardando..." : "Crear Reserva"}
      </button>

      {success && (
        <p className="text-green-600 font-semibold">
          ¡Reserva creada con éxito!
        </p>
      )}
    </form>
  );
}
