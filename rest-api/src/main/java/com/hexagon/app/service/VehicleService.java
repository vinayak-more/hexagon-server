package com.hexagon.app.service;

import com.hexagon.app.model.Vehicle;
import com.hexagon.app.repository.IEntityRepository;
import com.hexagon.app.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class VehicleService extends IEntityService<Vehicle> {

    @Autowired
    private VehicleRepository repository;

    @Override
    public IEntityRepository<Vehicle> getRepository() {
        return repository;
    }

}
