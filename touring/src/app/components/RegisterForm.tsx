"use client";

import { useState } from "react";
import { registerUser } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "USER",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registro exitoso");
      router.push("/auth/login");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error al registrar:", err.message);
        alert("Error al registrar: " + err.message);
      } else {
        console.error("Error desconocido:", err);
        alert("Error desconocido en el registro");
      }
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-blue-700 text-center">Registro</h2>

      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={formData.username}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-3"
      >
        <option value="USER">Usuario</option>
        <option value="ADMIN">Administrador</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors"
      >
        Registrarse
      </button>
    </form>
  );
}
