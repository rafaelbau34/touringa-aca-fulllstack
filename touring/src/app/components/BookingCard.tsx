"use client";

import { Booking } from "@/app/types/booking";
import { cancelBooking, deleteBooking } from "@/app/lib/api";
import { useRouter } from "next/navigation";

interface Props {
  booking: Booking;
}

function parseCustomDate(dateStr: string): Date | null {
  const parts = dateStr.split(" ");
  if (parts.length !== 2) return null;

  const [datePart, timePart] = parts;
  const dateElems = datePart.split("/");
  const timeElems = timePart.split(":");

  if (dateElems.length !== 3 || timeElems.length !== 3) return null;

  const day = parseInt(dateElems[0], 10);
  const month = parseInt(dateElems[1], 10) - 1; // Mes 0-based
  const year = parseInt(dateElems[2], 10);

  const hours = parseInt(timeElems[0], 10);
  const minutes = parseInt(timeElems[1], 10);
  const seconds = parseInt(timeElems[2], 10);

  return new Date(year, month, day, hours, minutes, seconds);
}

export default function BookingCard({ booking }: Props) {
  const router = useRouter();

  const handleCancel = async () => {
    if (
      confirm(
        `¿Seguro que deseas cancelar la reserva de ${booking.customerName}?`
      )
    ) {
      await cancelBooking(booking.id);
      router.refresh();
    }
  };

  const handleDelete = async () => {
    if (
      confirm(
        `¿Seguro que deseas eliminar la reserva de ${booking.customerName}? Esta acción es irreversible.`
      )
    ) {
      await deleteBooking(booking.id);
      router.refresh();
    }
  };

  const formattedDate =
    parseCustomDate(booking.bookingDate)?.toLocaleString() || "Fecha no válida";

  return (
    <div className="bg-gradient-to-r from-cyan-50 to-white rounded-lg shadow-lg p-6 border border-cyan-300 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-cyan-800 mb-2">
        {booking.customerName}
      </h2>
      <p className="text-gray-700 text-lg mb-1">
        <span className="font-semibold">Celular:</span> {booking.cellNumber}
      </p>
      <p className="text-gray-700 text-lg mb-3">
        <span className="font-semibold">Fecha:</span> {formattedDate}
      </p>
      <p
        className={`inline-block px-3 py-1 rounded-full font-semibold ${
          booking.cancelled
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {booking.cancelled ? "Cancelada" : "Activa"}
      </p>

      <div className="mt-5 flex gap-4">
        {!booking.cancelled && (
          <button
            onClick={handleCancel}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-md transition-colors duration-200"
          >
            Cancelar
          </button>
        )}
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-200"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
