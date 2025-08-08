"use client";

import { useState } from "react";
import { BookingRequest } from "@/app/types/booking";
import { createBooking } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const [form, setForm] = useState<BookingRequest>({
    customerName: "",
    cellNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createBooking(form);
      router.push("/bookings");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al crear la reserva. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-center text-cyan-700 tracking-tight">
        Nueva Reserva
      </h2>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Nombre del cliente
        </label>
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          placeholder="Ej. Juan Pérez"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Número de celular
        </label>
        <input
          type="text"
          name="cellNumber"
          value={form.cellNumber}
          onChange={handleChange}
          placeholder="Ej. 5551234567"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 font-medium text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white font-semibold text-lg transition-all"
      >
        {loading ? "Creando reserva..." : "Crear reserva"}
      </button>
    </form>
  );
}
