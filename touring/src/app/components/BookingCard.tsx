"use client";

import { Booking } from "@/app/types/booking";
import { cancelBooking, deleteBooking } from "@/app/lib/api";
import { useRouter } from "next/navigation";

interface Props {
  booking: Booking;
}

export default function BookingCard({ booking }: Props) {
  const router = useRouter();

  const handleCancel = async () => {
    await cancelBooking(booking.id);
    router.refresh();
  };

  const handleDelete = async () => {
    await deleteBooking(booking.id);
    router.refresh();
  };

  return (
    <div className="border rounded p-4 shadow mb-4 bg-white">
      <h2 className="text-xl font-semibold">{booking.customerName}</h2>
      <p>Celular: {booking.cellNumber}</p>
      <p>Fecha: {booking.bookingDate}</p>
      <p className={booking.cancelled ? "text-red-500" : "text-green-600"}>
        {booking.cancelled ? "Cancelada" : "Activa"}
      </p>
      <div className="mt-2 space-x-2">
        {!booking.cancelled && (
          <button
            onClick={handleCancel}
            className="bg-yellow-400 px-3 py-1 rounded"
          >
            Cancelar
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
