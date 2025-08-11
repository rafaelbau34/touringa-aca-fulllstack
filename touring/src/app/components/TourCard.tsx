import { useRouter } from "next/navigation";
import { Tour } from "@/app/types/tour";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi"; // Icono turístico

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  const router = useRouter();

  const handleReserve = () => {
    router.push(`/bookings/new?tourId=${tour.id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      {/* Encabezado con logo turístico */}
      <div
        className="h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center"
        aria-label="Imagen del tour"
      >
        <GiPalmTree className="text-white text-8xl opacity-90" />
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-extrabold text-cyan-800 mb-2 truncate">
            {tour.name}
          </h3>
          <p className="text-gray-700 mb-4 line-clamp-3">{tour.description}</p>

          <div className="flex items-center text-cyan-700 mb-1 space-x-2">
            <FaMapMarkerAlt />
            <span className="font-medium">{tour.location}</span>
          </div>

          <div className="flex items-center text-cyan-700 mb-4 space-x-2">
            <FaCalendarAlt />
            <span className="text-sm font-medium">{tour.availableDate}</span>
          </div>

          <p className="text-xl font-bold text-green-600">
            ${tour.price.toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleReserve}
          className="mt-6 bg-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-cyan-700 hover:shadow-lg transition"
          aria-label={`Reservar tour ${tour.name}`}
        >
          Reservar Ahora
        </button>
      </div>
    </div>
  );
}
