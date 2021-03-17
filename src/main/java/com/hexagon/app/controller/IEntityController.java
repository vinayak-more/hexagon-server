package com.hexagon.app.controller;

import com.hexagon.app.model.Driver;
import com.hexagon.app.model.IEntity;
import com.hexagon.app.service.IEntityService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

public abstract class IEntityController<T extends IEntity> {

    public abstract IEntityService<T> getService();

    @GetMapping()
    public Collection<T> getAll() {
        return getService().getAll();
    }

    @GetMapping("/all")
    public Collection<T> getAllEntities() {
        return getService().getAllEntities();
    }

    @PostMapping()
    public T save(@RequestBody T entity){
        return getService().save(entity);
    }

    @PutMapping("/{id}")
    public T update(@PathVariable long id, @RequestBody T entity){
        return getService().update(entity, id);
    }

    @DeleteMapping("/{id}")
    public T delete(@PathVariable long id){
        return getService().delete(id);
    }
}
