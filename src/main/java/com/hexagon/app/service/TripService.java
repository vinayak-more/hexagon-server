package com.hexagon.app.service;

import com.hexagon.app.model.Trip;
import com.hexagon.app.repository.IEntityRepository;
import com.hexagon.app.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripService implements IEntityService<Trip> {
    @Autowired
    private TripRepository repository;

    @Override
    public IEntityRepository getRepository() {
        return repository;
    }
}
