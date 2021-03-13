package com.hexagon.app.controller;

import com.hexagon.app.service.IEntityService;
import com.hexagon.app.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trips")
public class TripController extends IEntityController {

    @Autowired
    private TripService service;

    @Override
    public IEntityService getService() {
        return service;
    }
}
