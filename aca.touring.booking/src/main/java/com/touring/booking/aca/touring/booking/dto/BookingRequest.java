package com.touring.booking.aca.touring.booking.dto;

public class BookingRequest {
    private String customerName;
    private String tourName;

    public String getCustomerName() {
        return customerName;
    }

    public String getTourName() {
        return tourName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public void setTourName(String tourName) {
        this.tourName = tourName;
    }
}
