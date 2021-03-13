package com.hexagon.app.controller;

import com.hexagon.app.model.Driver;
import com.hexagon.app.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/drivers")
public class DriverController {

    @Autowired
    private DriverService service;

    @GetMapping()
    public Collection<Driver> getAll(){
        return service.getAll();
    }

    @PostMapping()
    public Driver save(@RequestBody Driver driver){
        return service.save(driver);
    }

    @PutMapping("/{id}")
    public Driver update(@PathVariable long id, @RequestBody Driver driver){
        return service.update(driver, id);
    }

    @DeleteMapping("/{id}")
    public Driver delete(@PathVariable long id){
        return service.delete(id);
    }
}
