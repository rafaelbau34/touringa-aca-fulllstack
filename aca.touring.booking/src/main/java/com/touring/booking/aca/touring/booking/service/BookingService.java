package com.touring.booking.aca.touring.booking.service;

import com.touring.booking.aca.touring.booking.model.Booking;
import com.touring.booking.aca.touring.booking.dto.BookingRequest;

import java.util.List;

public interface BookingService {
    Booking createBooking(BookingRequest request);
    List<Booking> getAllBookings();
}
