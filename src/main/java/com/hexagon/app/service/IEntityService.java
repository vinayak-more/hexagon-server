package com.hexagon.app.service;

import com.hexagon.app.model.IEntity;
import com.hexagon.app.repository.IEntityRepository;

import java.util.Collection;

public interface IEntityService<T extends IEntity> {

    IEntityRepository<T> getRepository();

    default Collection<T> getAll() {
        return getRepository().findAllByIsActive(true);
    }

    default T save(T entity) {
        entity.setId(0);
        entity.setActive(true);
        return getRepository().save(entity);
    }

    default T update(T entity, long id) {
        entity.setId(id);
        return getRepository().save(entity);
    }

    default T delete(long id) {
        T entity = getRepository().findById(id).get();
        entity.setActive(false);
        return getRepository().save(entity);
    }

}
