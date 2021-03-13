package com.hexagon.app.repository;

import com.hexagon.app.model.IEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Collection;

@NoRepositoryBean
public interface IEntityRepository<T extends IEntity> extends JpaRepository<T, Long> {
    public Collection<T> findAllByIsActive(boolean isActive);

}
