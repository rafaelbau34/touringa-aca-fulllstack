"use client";

import { useEffect, useState } from "react";
import { getTours } from "@/app/lib/api";
import { Tour } from "@/app/types/tour";
import TourCard from "@/app/components/TourCard";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/lib/auth";
import { FaUmbrellaBeach } from "react-icons/fa";

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login");
    } else {
      fetchTours();
    }
  }, [router]);

  const fetchTours = async () => {
    try {
      const res = await getTours();
      setTours(res.data);
    } catch {
      alert("Error al cargar los tours");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaUmbrellaBeach className="text-cyan-600 text-5xl" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-800 drop-shadow-md">
              Explora Nuestros Tours
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vive experiencias únicas, conoce lugares increíbles y descubre la
            magia de Acapulco con nuestros tours diseñados para ti.
          </p>
        </div>

        {/* LISTA DE TOURS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* MENSAJE SI NO HAY TOURS */}
        {tours.length === 0 && (
          <div className="text-center mt-16 bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
            <p className="text-gray-500 text-lg">
              No hay tours disponibles por el momento. 🌴
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
