package com.hexagon.app.service;

import com.hexagon.app.model.Client;
import com.hexagon.app.repository.ClientRepository;
import com.hexagon.app.repository.IEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService extends IEntityService<Client> {

    @Autowired
    private ClientRepository repository;

    @Override
    public IEntityRepository<Client> getRepository() {
        return repository;
    }
}
