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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBooking(form);
    router.push("/bookings");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nombre del cliente</label>
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Número de celular</label>
        <input
          type="text"
          name="cellNumber"
          value={form.cellNumber}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Crear reserva
      </button>
    </form>
  );
}
