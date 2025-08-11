"use client";

import { useRouter } from "next/navigation";
import {
  FaUmbrellaBeach,
  FaMapMarkedAlt,
  FaRegClock,
  FaShip,
  FaCocktail,
  FaSwimmer,
} from "react-icons/fa";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-200 px-6 text-center">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-6xl font-extrabold text-cyan-800 mb-4 drop-shadow-lg">
            Touring Acapulco
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Vive experiencias únicas en la bahía más hermosa de México 🌊
          </p>
          <button
            onClick={() => router.push("/tours")}
            className="px-8 py-4 bg-cyan-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-cyan-700 hover:scale-105 transition transform"
          >
            Explorar Tours
          </button>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold text-cyan-800 mb-12">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:shadow-xl transition">
            <FaUmbrellaBeach className="text-5xl text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Playas de Ensueño</h3>
            <p className="text-gray-600 mt-2">
              Descubre los paisajes más icónicos y paradisíacos de Acapulco.
            </p>
          </div>
          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:shadow-xl transition">
            <FaMapMarkedAlt className="text-5xl text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Rutas Exclusivas</h3>
            <p className="text-gray-600 mt-2">
              Vive tours únicos que solo ofrecemos nosotros.
            </p>
          </div>
          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:shadow-xl transition">
            <FaRegClock className="text-5xl text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Reservas Rápidas</h3>
            <p className="text-gray-600 mt-2">
              Sistema ágil y seguro para planear tu viaje sin estrés.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section className="bg-cyan-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-cyan-900 mb-12">
          Experiencias Inolvidables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaShip className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Paseos en Barco</h3>
            <p className="text-gray-600 mt-2">
              Navega por la bahía y disfruta del atardecer en el mar.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaCocktail className="text-5xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Cocteles Tropicales</h3>
            <p className="text-gray-600 mt-2">
              Relájate con bebidas refrescantes junto a la playa.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaSwimmer className="text-5xl text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Actividades Acuáticas</h3>
            <p className="text-gray-600 mt-2">
              Vive la emoción del buceo, snorkel y más.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cyan-300 py-16 text-center">
        <h2 className="text-3xl font-bold text-cyan-900 mb-6">
          ¿Listo para tu próxima aventura?
        </h2>
        <button
          onClick={() => router.push("/tours")}
          className="px-8 py-4 bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-cyan-800 hover:scale-105 transition transform"
        >
          Reservar Ahora
        </button>
      </section>
    </main>
  );
}
