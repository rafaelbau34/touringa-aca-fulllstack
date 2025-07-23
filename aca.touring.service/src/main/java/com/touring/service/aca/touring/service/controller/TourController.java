package com.touring.service.aca.touring.service.controller;

import com.touring.service.aca.touring.service.dto.TourRequest;
import com.touring.service.aca.touring.service.model.Tour;
import com.touring.service.aca.touring.service.service.TourService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final TourService service;

    public TourController(TourService service) {
        this.service = service;
    }

    @PostMapping
    public Tour createTour(@RequestBody TourRequest request) {
        return service.createTour(request);
    }

    @GetMapping
    public List<Tour> getAllTours() {
        return service.getAllTours();
    }

    @PutMapping("/{id}")
    public Tour updateTour(@PathVariable Long id, @RequestBody TourRequest request) {
        return service.updateTour(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteTour(@PathVariable Long id) {
        service.deleteTour(id);
    }
}

