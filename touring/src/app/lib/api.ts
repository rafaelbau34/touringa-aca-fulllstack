import axios from "axios";
import { Booking, BookingRequest } from "@/app/types/booking";

const API_URL = "http://localhost:8082/api/bookings";

export const getAllBookings = async (): Promise<Booking[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createBooking = async (data: BookingRequest): Promise<Booking> => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateBooking = async (
  id: number,
  data: BookingRequest
): Promise<Booking> => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteBooking = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const cancelBooking = async (id: number): Promise<Booking> => {
  const response = await axios.put(`${API_URL}/${id}/cancel`);
  return response.data;
};
