// components/RegisterForm.tsx
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
    } catch {
      alert("Error al registrar");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow rounded-lg"
    >
      <h2 className="text-xl font-bold">Registrarse</h2>
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={formData.username}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="USER">Usuario</option>
        <option value="ADMIN">Administrador</option>
      </select>
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Registrarse
      </button>
    </form>
  );
}
