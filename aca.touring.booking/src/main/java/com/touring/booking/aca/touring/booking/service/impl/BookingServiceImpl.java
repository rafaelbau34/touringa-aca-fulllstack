package com.touring.booking.aca.touring.booking.service.impl;

import com.touring.booking.aca.touring.booking.dto.BookingRequest;
import com.touring.booking.aca.touring.booking.model.Booking;
import com.touring.booking.aca.touring.booking.repository.BookingRepository;
import com.touring.booking.aca.touring.booking.service.BookingService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository repository;

    public BookingServiceImpl(BookingRepository repository) {
        this.repository = repository;
    }

    @Override
    public Booking createBooking(BookingRequest request) {
        Booking booking = new Booking();
        booking.setCustomerName(request.getCustomerName());
    booking.setTourName(request.getTourName());
        booking.setBookingDate(LocalDateTime.now());
        booking.setPaid(false);
        booking.setCancelled(false);
        return repository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }
}
