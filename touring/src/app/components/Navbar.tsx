"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken, removeToken } from "@/app/lib/auth";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi"; // Ícono de palmera

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, [path]);

  const linkClass = (href: string) =>
    `block px-4 py-2 rounded-md font-medium ${
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
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-cyan-700"
        >
          <GiPalmTree className="text-cyan-600 text-3xl" />{" "}
          {/* Icono palmera */}
          Touring Acapulco
        </Link>

        {/* BOTÓN HAMBURGUESA - SOLO EN MÓVIL */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-cyan-700 md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* LINKS - DESKTOP */}
        <div className="hidden md:flex space-x-2">
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

      {/* MENU MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/bookings"
            className={linkClass("/bookings")}
            onClick={() => setIsOpen(false)}
          >
            Reservas
          </Link>
          <Link
            href="/bookings/new"
            className={linkClass("/bookings/new")}
            onClick={() => setIsOpen(false)}
          >
            Nueva Reserva
          </Link>
          <Link
            href="/tours"
            className={linkClass("/tours")}
            onClick={() => setIsOpen(false)}
          >
            Tours
          </Link>
          {!isAuthenticated ? (
            <>
              <Link
                href="/auth/login"
                className={linkClass("/auth/login")}
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className={linkClass("/auth/register")}
                onClick={() => setIsOpen(false)}
              >
                Registro
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-red-600 font-semibold hover:bg-red-50"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
