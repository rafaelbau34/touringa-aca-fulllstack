"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const linkClass = (href: string) =>
    `px-4 py-2 rounded-md font-medium ${
      path === href
        ? "bg-cyan-600 text-white shadow-md"
        : "text-cyan-700 hover:bg-cyan-100 transition-colors"
    }`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-cyan-700">
          Touring Acapulco
        </Link>
        <div className="space-x-2">
          <Link href="/" className={linkClass("/")}>
            Inicio
          </Link>
          <Link href="/bookings" className={linkClass("/bookings")}>
            Reservas
          </Link>
          <Link href="/bookings/new" className={linkClass("/bookings/new")}>
            Nueva Reserva
          </Link>
        </div>
      </div>
    </nav>
  );
}
