import BookingForm from "@/app/components/BookingForm";

export default function NewBookingPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nueva Reserva</h1>
      <BookingForm />
    </div>
  );
}
