package com.hexagon.app.controller;

import com.hexagon.app.model.Client;
import com.hexagon.app.service.ClientService;
import com.hexagon.app.service.IEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/clients")
public class ClientController extends IEntityController<Client> {
    @Autowired
    private ClientService service;

    @Override
    public IEntityService<Client> getService() {
        return service;
    }
}
