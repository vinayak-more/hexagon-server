package com.hexagon.app.controller;

import com.hexagon.app.model.Vehicle;
import com.hexagon.app.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin("*")
@RestController
@RequestMapping("/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService service;

    @GetMapping()
    public Collection<Vehicle> getAll() {
        return service.getAll();
    }

    @PostMapping()
    public Vehicle add(@RequestBody Vehicle vehicle) {
        return service.save(vehicle);
    }

    @PutMapping("/{id}")
    public Vehicle update(@RequestBody Vehicle vehicle, @PathVariable("id") Long id){
        vehicle.setId(id);
        return service.save(vehicle);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }
}
