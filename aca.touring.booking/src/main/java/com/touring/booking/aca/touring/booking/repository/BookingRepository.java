package com.touring.booking.aca.touring.booking.repository;

import com.touring.booking.aca.touring.booking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
