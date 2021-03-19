package com.hexagon.app.controller;

import com.hexagon.app.model.Trip;
import com.hexagon.app.service.IEntityService;
import com.hexagon.app.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trips")
public class TripController extends IEntityController<Trip> {

    @Autowired
    private TripService service;

    @Override
    public IEntityService<Trip> getService() {
        return service;
    }

}
