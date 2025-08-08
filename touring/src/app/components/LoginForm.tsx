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
      className="max-w-md mx-auto bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-cyan-700 text-center">
        Iniciar Sesión
      </h2>

      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full"
      />
      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-md transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}
