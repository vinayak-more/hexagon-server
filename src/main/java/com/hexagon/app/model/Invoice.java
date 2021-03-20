package com.hexagon.app.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
public class Invoice extends IEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long invoiceNumber;
    private Date fromDate;
    private Date toDate;
    private double fuelRate;
    @ManyToOne
    @JoinColumn(name="vehicle_id", referencedColumnName = "id")
    private Vehicle vehicle;
    @ManyToOne
    @JoinColumn(name="client_id", referencedColumnName = "id")
    private Client client;

    @ManyToMany
    @JoinTable(name="invoice_trip", joinColumns = @JoinColumn(name="invoice_id"), inverseJoinColumns = @JoinColumn(name="trip_id"))
    private Collection<Trip> trips;

    public long getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(long invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public double getFuelRate() {
        return fuelRate;
    }

    public void setFuelRate(double fuelRate) {
        this.fuelRate = fuelRate;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Collection<Trip> getTrips() {
        return trips;
    }

    public void setTrips(Collection<Trip> trips) {
        this.trips = trips;
    }
}
