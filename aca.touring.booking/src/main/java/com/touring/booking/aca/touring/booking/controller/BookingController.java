package com.touring.booking.aca.touring.booking.controller;

import com.touring.booking.aca.touring.booking.dto.BookingRequest;
import com.touring.booking.aca.touring.booking.model.Booking;
import com.touring.booking.aca.touring.booking.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    @PostMapping
    public Booking createBooking(@RequestBody BookingRequest request) {
        return service.createBooking(request);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.getAllBookings();
    }
}
