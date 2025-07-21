package com.touring.booking.aca.touring.booking.controller;

import com.touring.booking.aca.touring.booking.dto.BookingRequest;
import com.touring.booking.aca.touring.booking.model.Booking;
import com.touring.booking.aca.touring.booking.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest request) {
        Booking created = service.createBooking(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED); 
    }

    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = service.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK); 
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody BookingRequest request) {
        try {
            Booking updated = service.updateBooking(id, request);
            return new ResponseEntity<>(updated, HttpStatus.OK); 
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        try {
            service.deleteBooking(id);
            return new ResponseEntity<>("Booking deleted successfully.", HttpStatus.NO_CONTENT); 
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Booking not found.", HttpStatus.NOT_FOUND); 
        }
    }
}
