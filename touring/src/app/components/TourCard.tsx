// components/TourCard.tsx
import { Tour } from "@/app/types/tour";

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{tour.name}</h3>
      <p className="text-gray-600">{tour.description}</p>
      <p className="mt-2 font-medium">Lugar: {tour.location}</p>
      <p className="mt-1 font-bold text-indigo-600">${tour.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-1">
        Disponible: {tour.availableDate}
      </p>
    </div>
  );
}
