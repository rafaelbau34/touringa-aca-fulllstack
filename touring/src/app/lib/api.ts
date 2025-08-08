import axios, { AxiosInstance } from "axios";

// API para Auth y Tours
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081",
});

// API para Bookings
const BOOKING_API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BOOKING_API || "http://localhost:8082/api/bookings",
});

// Interceptor JWT para ambas APIs
const addAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    // ❌ No agregar token en login o registro
    if (
      token &&
      config.headers &&
      !config.url?.includes("/auth/login") &&
      !config.url?.includes("/auth/register")
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

addAuthInterceptor(API);
addAuthInterceptor(BOOKING_API);

// ----------------------
// Auth
export const registerUser = async (data: {
  username: string;
  password: string;
  role: string;
}) => {
  try {
    const res = await API.post("/auth/register", data);
    return res.data;
  } catch (err: any) {
    console.error("Error en registro:", err.response?.data || err.message);
    throw err;
  }
};

export const loginUser = (data: { username: string; password: string }) =>
  API.post("/auth/login", data);

// ----------------------
// Tours
export const getTours = () => API.get("/api/tours");
export const createTour = (data: any) => API.post("/api/tours", data);
export const updateTour = (id: number, data: any) =>
  API.put(`/api/tours/${id}`, data);
export const deleteTour = (id: number) => API.delete(`/api/tours/${id}`);

// ----------------------
// Bookings
import { Booking, BookingRequest } from "@/app/types/booking";

export const getAllBookings = async (): Promise<Booking[]> => {
  const response = await BOOKING_API.get("");
  return response.data;
};

export const createBooking = async (data: BookingRequest): Promise<Booking> => {
  const response = await BOOKING_API.post("", data);
  return response.data;
};

export const updateBooking = async (
  id: number,
  data: BookingRequest
): Promise<Booking> => {
  const response = await BOOKING_API.put(`/${id}`, data);
  return response.data;
};

export const deleteBooking = async (id: number): Promise<void> => {
  await BOOKING_API.delete(`/${id}`);
};

export const cancelBooking = async (id: number): Promise<Booking> => {
  const response = await BOOKING_API.put(`/${id}/cancel`);
  return response.data;
};

// Export default solo si lo necesitas
export default API;
