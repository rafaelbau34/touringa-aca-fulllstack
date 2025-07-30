"use client";
export default function HomePage() {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-5xl font-extrabold text-cyan-700 mb-6">
        Bienvenido a Touring Acapulco
      </h1>
      <p className="text-xl max-w-xl mx-auto text-gray-700">
        Gestión profesional de reservas de tours en la hermosa bahía de
        Acapulco. Descubre, reserva y disfruta experiencias inolvidables con
        nosotros.
      </p>
      <img
        src="/acapulco-beach.jpg"
        alt="Bahía de Acapulco"
        className="mt-10 rounded-lg shadow-lg mx-auto max-w-full h-auto"
      />
    </section>
  );
}
