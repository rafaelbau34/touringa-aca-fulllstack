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
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-cyan-700 mb-4 text-center">
        Nueva Reserva
      </h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Nombre del cliente
        </label>
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Ej. Juan Pérez"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Número de celular
        </label>
        <input
          type="text"
          name="cellNumber"
          value={form.cellNumber}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Ej. 5551234567"
          required
        />
      </div>

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white font-semibold py-3 rounded-md transition-colors"
      >
        {loading ? "Creando reserva..." : "Crear reserva"}
      </button>
    </form>
  );
}
