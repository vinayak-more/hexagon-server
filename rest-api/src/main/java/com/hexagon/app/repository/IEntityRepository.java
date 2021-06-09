package com.hexagon.app.repository;

import com.hexagon.app.model.IEntity;
import com.hexagon.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Collection;

@NoRepositoryBean
public interface IEntityRepository<T extends IEntity> extends JpaRepository<T, Long> {

    Collection<T> findAllByUser(User user);

    Collection<T> findAllByIsActiveAndUser(boolean b, User currentUser);
}
