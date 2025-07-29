"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <nav className="bg-white shadow p-4 mb-6">
      <div className="max-w-4xl mx-auto flex gap-4">
        <Link href="/bookings" className={linkClass("/bookings")}>
          Reservas
        </Link>
        <Link href="/bookings/new" className={linkClass("/bookings/new")}>
          Nueva Reserva
        </Link>
      </div>
    </nav>
  );
}
