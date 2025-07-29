export interface Booking {
  id: number;
  customerName: string;
  cellNumber: string;
  bookingDate: string;
  cancelled: boolean;
}

export interface BookingRequest {
  customerName: string;
  cellNumber: string;
}
