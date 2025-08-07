// components/LoginForm.tsx
"use client";

import { useState } from "react";
import { loginUser } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { saveToken } from "@/app/lib/auth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser({ username, password });
      saveToken(res.data.token);
      router.push("/");
    } catch {
      alert("Credenciales inválidas");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow rounded-lg"
    >
      <h2 className="text-xl font-bold">Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </form>
  );
}
