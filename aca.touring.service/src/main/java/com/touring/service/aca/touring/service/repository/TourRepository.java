package com.touring.service.aca.touring.service.repository;

import com.touring.service.aca.touring.service.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepository extends JpaRepository<Tour, Long> {
}
