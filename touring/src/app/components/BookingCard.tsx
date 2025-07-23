import { Booking } from "@/app/types/booking";
import { CalendarDays, Mail, User, XCircle, CheckCircle } from "lucide-react";

export default function BookingCard({ booking }: { booking: Booking }) {
  return (
    <div className="bg-[#1e293b] text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-700">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        {booking.tourName}
      </h2>

      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-cyan-300" />
          <span className="font-medium text-gray-300">Nombre:</span>{" "}
          {booking.name}
        </p>

        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-cyan-300" />
          <span className="font-medium text-gray-300">Email:</span>{" "}
          {booking.email}
        </p>

        <p className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-cyan-300" />
          <span className="font-medium text-gray-300">
            Fecha del tour:
          </span>{" "}
          {new Date(booking.date).toLocaleDateString()}
        </p>

        <p className="flex items-center gap-2 font-semibold">
          {booking.cancelled ? (
            <>
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-red-400">Cancelada</span>
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300">Activa</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
