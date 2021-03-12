package com.hexagon.app.controller;

import com.hexagon.app.model.Client;
import com.hexagon.app.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private ClientService service;

    @GetMapping()
    public Collection<Client> getAll(){
        return service.getAll();
    }

    @PostMapping()
    public Client add(@RequestBody Client client){
        return service.save(client);
    }

    @PutMapping("/{id}")
    public Client update(@RequestBody Client client,@PathVariable("id") long id){
        return service.update(client, id);
    }

    @DeleteMapping("/{id}")
    public Client delete(@PathVariable() long id){
        return service.delete(id);
    }
}
