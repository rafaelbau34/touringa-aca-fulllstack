package com.touring.service.aca.touring.service.controller;

import com.touring.service.aca.touring.service.dto.TourRequest;
import com.touring.service.aca.touring.service.model.Tour;
import com.touring.service.aca.touring.service.service.TourService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final TourService service;

    public TourController(TourService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Tour> createTour(@Valid @RequestBody TourRequest request) {
        Tour createdTour = service.createTour(request);
        return new ResponseEntity<>(createdTour, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Tour>> getAllTours() {
        List<Tour> tours = service.getAllTours();
        return ResponseEntity.ok(tours);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tour> updateTour(@PathVariable Long id, @Valid @RequestBody TourRequest request) {
        Tour updatedTour = service.updateTour(id, request);
        return ResponseEntity.ok(updatedTour);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTour(@PathVariable Long id) {
        service.deleteTour(id);
        return ResponseEntity.noContent().build();
    }
}
