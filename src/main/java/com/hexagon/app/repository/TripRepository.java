package com.hexagon.app.repository;

import com.hexagon.app.model.Trip;

import java.util.Collection;
import java.util.Date;

public interface TripRepository extends IEntityRepository<Trip> {

    Collection<Trip> findByTripDateBetween(Date from, Date to);
}
