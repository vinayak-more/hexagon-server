package com.hexagon.app.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//@Entity
public class InvoiceTrip extends IEntity {

//    @ManyToOne
//    @JoinColumn(name="invoice_id")
    private Invoice invoice;

//    @ManyToOne
//    @JoinColumn(name="trip_id")
    private Trip trip;

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }
}
