package com.hexagon.app.repository;

import com.hexagon.app.model.Client;

import java.util.Collection;

public interface ClientRepository extends IEntityRepository<Client> {
    Collection<Client> findAllByIsActive(boolean isActive);
}
