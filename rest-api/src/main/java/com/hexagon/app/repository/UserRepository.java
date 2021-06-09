package com.hexagon.app.repository;

import com.hexagon.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends IEntityRepository<User> {

    User findByUsername(String username);
}
