package com.hexagon.app.service;

import com.hexagon.app.model.Driver;
import com.hexagon.app.repository.DriverRepository;
import com.hexagon.app.repository.IEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DriverService implements IEntityService<Driver>{

    @Autowired
    private DriverRepository repository;

    @Override
    public IEntityRepository<Driver> getRepository() {
        return repository;
    }
}
