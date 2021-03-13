package com.hexagon.app.controller;

import com.hexagon.app.model.Vehicle;
import com.hexagon.app.service.IEntityService;
import com.hexagon.app.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/vehicles")
public class VehicleController extends IEntityController<Vehicle> {

    @Autowired
    private VehicleService service;

    @Override
    public IEntityService<Vehicle> getService() {
        return service;
    }

}
