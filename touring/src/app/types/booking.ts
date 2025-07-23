export interface BookingRequest {
  name: string;
  email: string;
  date: string; // formato "YYYY-MM-DD"
  tourName: string;
}

export interface Booking extends BookingRequest {
  id: number;
  cancelled: boolean;
  bookingDate: string;
}
