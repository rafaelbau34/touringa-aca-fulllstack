"use client";

import { useEffect, useState } from "react";
import { getAllBookings } from "@/app/lib/api";
import BookingCard from "@/app/components/BookingCard";
import { Booking } from "@/app/types/booking";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBookings()
      .then(setBookings)
      .catch((err) => {
        console.error("Error al cargar reservas:", err);
        setBookings([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-cyan-700 mb-8">Reservas</h1>

      {loading ? (
        <p className="text-gray-600">Cargando reservas...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-600">No hay reservas registradas.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((b) => (
            <BookingCard key={b.id} booking={b} />
          ))}
        </div>
      )}
    </div>
  );
}
