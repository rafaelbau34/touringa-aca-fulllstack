// app/auth/login/page.tsx
"use client";

import LoginForm from "@/app/components/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <LoginForm />
    </div>
  );
}
