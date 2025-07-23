package com.touring.service.aca.touring.service.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TourRequest {
    private String name;
    private String description;
    private String location;
    private double price;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime availableDate;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public LocalDateTime getAvailableDate() { return availableDate; }
    public void setAvailableDate(LocalDateTime availableDate) { this.availableDate = availableDate; }
}

