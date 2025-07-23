import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          Touring Acapulco
        </Link>
        <div className="space-x-4">
          <Link href="/bookings" className="hover:underline">
            Reservas
          </Link>
          <Link href="/bookings/new" className="hover:underline">
            Nueva
          </Link>
        </div>
      </div>
    </nav>
  );
}
