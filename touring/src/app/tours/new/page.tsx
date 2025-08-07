// app/tours/new/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/lib/auth";
import TourForm from "@/app/components/TourForm";

export default function NewTourPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <TourForm />
    </div>
  );
}
