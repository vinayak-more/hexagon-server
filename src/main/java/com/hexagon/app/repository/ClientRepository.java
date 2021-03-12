package com.hexagon.app.repository;

import com.hexagon.app.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface ClientRepository extends JpaRepository<Client, Long> {
    public Collection<Client> findAllByIsActive(boolean isActive);
}
