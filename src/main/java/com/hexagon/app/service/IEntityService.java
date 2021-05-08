package com.hexagon.app.service;

import com.hexagon.app.model.IEntity;
import com.hexagon.app.model.User;
import com.hexagon.app.repository.IEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Collection;

public abstract class IEntityService<T extends IEntity> {

    abstract IEntityRepository<T> getRepository();

    @Autowired
    private UserService userService;

    public Collection<T> getAll() {
        return getRepository().findAllByIsActiveAndUser(true,getCurrentUser());
    }

    public T save(T entity) {
        entity.setUser(getCurrentUser());
        entity.setId(0);
        entity.setActive(true);
        return getRepository().save(entity);
    }

    protected User getCurrentUser(){
        Authentication user=  SecurityContextHolder.getContext().getAuthentication();
        return userService.findByUsername(user.getName());
    }

    public T update(T entity, long id) {
        entity.setId(id);
        entity.setUser(getCurrentUser());
        return getRepository().save(entity);
    }

    public T delete(long id) {
        T entity = getRepository().findById(id).get();
        entity.setActive(false);
        return getRepository().save(entity);
    }

    public Collection<T> getAllEntities() {
        return getRepository().findAllByUser(getCurrentUser());
    }
}
