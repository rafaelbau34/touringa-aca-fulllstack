// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken, removeToken } from "@/app/lib/auth";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, [path]);

  const linkClass = (href: string) =>
    `px-4 py-2 rounded-md font-medium ${
      path === href
        ? "bg-cyan-600 text-white shadow-md"
        : "text-cyan-700 hover:bg-cyan-100 transition-colors"
    }`;

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

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
          <Link href="/tours" className={linkClass("/tours")}>
            Tours
          </Link>
          {!isAuthenticated ? (
            <>
              <Link href="/auth/login" className={linkClass("/auth/login")}>
                Login
              </Link>
              <Link
                href="/auth/register"
                className={linkClass("/auth/register")}
              >
                Registro
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-600 font-semibold hover:underline ml-2"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
