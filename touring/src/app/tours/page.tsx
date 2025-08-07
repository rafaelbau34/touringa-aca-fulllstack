// app/tours/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getTours } from "@/app/lib/api";
import { Tour } from "@/app/types/tour";
import TourCard from "@/app/components/TourCard";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/lib/auth";

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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Lista de Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
