package com.touring.service.aca.touring.service.service;

import com.touring.service.aca.touring.service.dto.TourRequest;
import com.touring.service.aca.touring.service.model.Tour;

import java.util.List;

public interface TourService {
    Tour createTour(TourRequest request);
    List<Tour> getAllTours();
    Tour updateTour(Long id, TourRequest request);
    void deleteTour(Long id);
}

