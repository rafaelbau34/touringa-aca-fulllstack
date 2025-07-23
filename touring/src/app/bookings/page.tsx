"use client";

import { useEffect, useState } from "react";
import { Booking } from "@/app/types/booking";
import { getBookings } from "@/app/lib/api";
import BookingCard from "@/app/components/BookingCard";

export default function BookingListPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getBookings();
      setBookings(data);
    };
    load();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Reservas Registradas</h1>
      {bookings.length === 0 ? (
        <p>No hay reservas aún.</p>
      ) : (
        bookings.map((b) => <BookingCard key={b.id} booking={b} />)
      )}
    </div>
  );
}
