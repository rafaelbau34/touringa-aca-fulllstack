"use client";

import { Booking } from "@/app/types/booking";
import { cancelBooking, deleteBooking } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { CalendarDays, Phone } from "lucide-react";

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
  const month = parseInt(dateElems[1], 10) - 1;
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
    <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-2xl shadow-xl shadow-cyan-500/10 border border-white/20 p-6 transition-transform hover:scale-[1.02]">
      <h2 className="text-2xl font-bold text-cyan-900 mb-4">
        {booking.customerName}
      </h2>

      <div className="flex items-center text-gray-800 mb-2">
        <Phone className="w-5 h-5 mr-2 text-cyan-700" />
        <span className="font-medium">{booking.cellNumber}</span>
      </div>

      <div className="flex items-center text-gray-800 mb-4">
        <CalendarDays className="w-5 h-5 mr-2 text-cyan-700" />
        <span>{formattedDate}</span>
      </div>

      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          booking.cancelled
            ? "bg-red-500/20 text-red-700"
            : "bg-green-500/20 text-green-700"
        }`}
      >
        {booking.cancelled ? "Cancelada" : "Activa"}
      </span>

      <div className="mt-6 flex gap-3">
        {!booking.cancelled && (
          <button
            onClick={handleCancel}
            className="flex-1 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 shadow-md transition-colors"
          >
            Cancelar
          </button>
        )}
        <button
          onClick={handleDelete}
          className="flex-1 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 shadow-md transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
