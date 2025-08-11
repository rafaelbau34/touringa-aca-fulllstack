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
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('')",
      }}
    >
      <div className="">
        <TourForm />
      </div>
    </div>
  );
}
