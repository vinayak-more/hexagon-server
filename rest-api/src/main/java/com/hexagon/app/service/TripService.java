package com.hexagon.app.service;

import com.hexagon.app.model.Trip;
import com.hexagon.app.model.TripQuery;
import com.hexagon.app.repository.IEntityRepository;
import com.hexagon.app.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class TripService extends IEntityService<Trip> {
    @Autowired
    private TripRepository repository;

    @Override
    public IEntityRepository<Trip> getRepository() {
        return repository;
    }

    public Collection<Trip> getTripsByQuery(TripQuery query) {
        Collection<Trip> trips = repository.findByTripDateBetween(query.getFromDate(), query.getToDate());
        if (query.hasVehicle()) {
            trips = trips.stream()
                    .filter(trip -> trip.getVehicle().equals(query.getVehicle()))
                    .collect(Collectors.toList());
        }
        if (query.hasClient()) {
            trips = trips.stream()
                    .filter(trip -> trip.getClient().equals(query.getClient()))
                    .collect(Collectors.toList());
        }
        return trips;
    }
}
