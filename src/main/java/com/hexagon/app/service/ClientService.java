package com.hexagon.app.service;

import com.hexagon.app.model.Client;
import com.hexagon.app.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ClientService {

    @Autowired
    private ClientRepository repository;

    public Collection<Client> getAll(){
        return repository.findAllByIsActive(true);
    }

    public Client save(Client client) {
        client.setActive(true);
        return repository.save(client);
    }

    public Client update(Client client, long id) {
        client.setId(id);
        return repository.save(client);
    }

    public Client delete(long id) {
        Client client = repository.findById(id).get();
        client.setActive(false);
        return repository.save(client);
    }
}
