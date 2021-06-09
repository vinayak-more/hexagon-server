package com.hexagon.app.controller;

import com.hexagon.app.model.Driver;
import com.hexagon.app.service.DriverService;
import com.hexagon.app.service.IEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/drivers")
public class DriverController extends IEntityController<Driver> {

    @Autowired
    private DriverService service;

    @Override
    public IEntityService<Driver> getService() {
        return service;
    }
}
