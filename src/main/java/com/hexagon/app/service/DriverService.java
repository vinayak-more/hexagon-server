package com.hexagon.app.service;

import com.hexagon.app.model.Driver;
import com.hexagon.app.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class DriverService {

    @Autowired
    private DriverRepository repository;

    public Collection<Driver> getAll() {
        return repository.findAllByIsActive(true);
    }

    public Driver save(Driver driver) {
        driver.setId(0);
        driver.setActive(true);
        return repository.save(driver);
    }

    public Driver update(Driver driver, long id) {
        driver.setId(id);
        return repository.save(driver);
    }

    public Driver delete(long id) {
        Driver driver = repository.findById(id).get();
        driver.setActive(false);
        return repository.save(driver);
    }
}
