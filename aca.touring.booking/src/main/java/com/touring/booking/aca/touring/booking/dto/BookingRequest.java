package com.touring.booking.aca.touring.booking.dto;

import java.time.LocalDateTime;

public class BookingRequest {
    private String customerName;
    private String tourName;
    private double price;
    private LocalDateTime tourDate;

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getTourName() { return tourName; }
    public void setTourName(String tourName) { this.tourName = tourName; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public LocalDateTime getTourDate() { return tourDate; }
    public void setTourDate(LocalDateTime tourDate) { this.tourDate = tourDate; }
}
