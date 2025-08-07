// app/auth/register/page.tsx
"use client";

import RegisterForm from "@/app/components/RegisterForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <RegisterForm />
    </div>
  );
}
