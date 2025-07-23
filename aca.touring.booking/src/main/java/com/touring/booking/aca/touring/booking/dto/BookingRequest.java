package com.touring.booking.aca.touring.booking.dto;

public class BookingRequest {
    private String customerName;
    private String cellNumber;

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getCellNumber() { return cellNumber; }
    public void setCellNumber(String cellNumber) { this.cellNumber = cellNumber; }
}
