package com.hexagon.app.repository;

import com.hexagon.app.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    public Collection<Vehicle> findAllByIsActive(boolean isActive);
}
