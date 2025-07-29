import { getAllBookings } from "@/app/lib/api";
import BookingCard from "@/app/components/BookingCard";

export default async function BookingsPage() {
  const bookings = await getAllBookings();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Reservas</h1>
      {bookings.length === 0 ? (
        <p>No hay reservas registradas.</p>
      ) : (
        bookings.map((b) => <BookingCard key={b.id} booking={b} />)
      )}
    </div>
  );
}
