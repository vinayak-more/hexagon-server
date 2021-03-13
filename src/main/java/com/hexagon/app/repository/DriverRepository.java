package com.hexagon.app.repository;

import com.hexagon.app.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface DriverRepository  extends JpaRepository<Driver, Long> {
    public Collection<Driver> findAllByIsActive(boolean isActive);
}
