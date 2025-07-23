package com.touring.service.aca.touring.service.service.impl;

import com.touring.service.aca.touring.service.dto.TourRequest;
import com.touring.service.aca.touring.service.model.Tour;
import com.touring.service.aca.touring.service.repository.TourRepository;
import com.touring.service.aca.touring.service.service.TourService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourServiceImpl implements TourService {

    private final TourRepository repository;

    public TourServiceImpl(TourRepository repository) {
        this.repository = repository;
    }

    @Override
    public Tour createTour(TourRequest request) {
        Tour tour = new Tour();
        tour.setName(request.getName());
        tour.setDescription(request.getDescription());
        tour.setLocation(request.getLocation());
        tour.setPrice(request.getPrice());
        tour.setAvailableDate(request.getAvailableDate());
        return repository.save(tour);
    }

    @Override
    public List<Tour> getAllTours() {
        return repository.findAll();
    }

    @Override
    public Tour updateTour(Long id, TourRequest request) {
        Tour tour = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Tour not found"));

        tour.setName(request.getName());
        tour.setDescription(request.getDescription());
        tour.setLocation(request.getLocation());
        tour.setPrice(request.getPrice());
        tour.setAvailableDate(request.getAvailableDate());

        return repository.save(tour);
    }

    @Override
    public void deleteTour(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Tour not found");
        }
        repository.deleteById(id);
    }
}
