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

    @Override
    public Booking updateBooking(Long id, BookingRequest request) {
        Booking booking = repository.findById(id)
        .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setCustomerName(request.getCustomerName());
        booking.setTourName(request.getTourName());
        return repository.save(booking);
    }

    @Override
    public void deleteBooking(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Booking not found");
        }
        repository.deleteById(id);
    }
}
