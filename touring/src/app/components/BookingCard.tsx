import { Booking } from "@/app/types/booking";
import { cancelBooking, deleteBooking } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { CalendarDays, Phone } from "lucide-react";
import { FaUmbrellaBeach } from "react-icons/fa";

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
    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl shadow-lg border border-blue-300 p-6 transition-transform hover:scale-[1.03] hover:shadow-blue-400">
      <div className="flex items-center mb-4 space-x-3">
        <FaUmbrellaBeach className="text-blue-500 w-7 h-7" />
        <h2 className="text-2xl font-bold text-black">
          {booking.customerName}
        </h2>
      </div>

      <div className="flex items-center text-black mb-2 space-x-2">
        <Phone className="w-5 h-5 text-blue-600" />
        <span className="font-medium">{booking.cellNumber}</span>
      </div>

      <div className="flex items-center text-black mb-4 space-x-2">
        <CalendarDays className="w-5 h-5 text-blue-600" />
        <span>{formattedDate}</span>
      </div>

      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          booking.cancelled
            ? "bg-red-500/30 text-red-700"
            : "bg-blue-500/30 text-blue-700"
        }`}
      >
        {booking.cancelled ? "Cancelada" : "Activa"}
      </span>

      <div className="mt-6 flex gap-4">
        {!booking.cancelled && (
          <button
            onClick={handleCancel}
            className="flex-1 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 shadow-md transition-colors"
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
