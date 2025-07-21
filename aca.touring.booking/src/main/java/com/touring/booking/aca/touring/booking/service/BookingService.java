package com.touring.booking.aca.touring.booking.service;

import com.touring.booking.aca.touring.booking.dto.BookingRequest;
import com.touring.booking.aca.touring.booking.model.Booking;

import java.util.List;

public interface BookingService {
    Booking createBooking(BookingRequest request);
    List<Booking> getAllBookings();
    Booking updateBooking(Long id, BookingRequest request);
    void deleteBooking(Long id);
    Booking cancelBooking(Long id); 
}
