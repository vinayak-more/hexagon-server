package com.hexagon.app.service;

import com.hexagon.app.model.Vehicle;
import com.hexagon.app.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository repository;

    public Collection<Vehicle> getAll() {
        return repository.findAllByIsActive(true);
    }

    public Vehicle save(Vehicle vehicle) {
        vehicle.setActive(true);
        return repository.save(vehicle);
    }

    public Vehicle update(Vehicle vehicle, long id) {
        vehicle.setId(id);
        return repository.save(vehicle);
    }

    public Vehicle delete(long id) {
        Vehicle vehicle = repository.findById(id).get();
        vehicle.setActive(false);
        return repository.save(vehicle);
    }
}
