import axios from "axios";
import { BookingRequest, Booking } from "@/app/types/booking";

const BASE_URL = process.env.NEXT_PUBLIC_BOOKING_API!;

export async function getBookings(): Promise<Booking[]> {
  const res = await axios.get<Booking[]>(BASE_URL);
  return res.data;
}

export async function createBooking(data: BookingRequest): Promise<Booking> {
  const res = await axios.post<Booking>(BASE_URL, data);
  return res.data;
}
