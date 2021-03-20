package com.hexagon.app.service;

import com.hexagon.app.model.Invoice;
import com.hexagon.app.repository.IEntityRepository;
import com.hexagon.app.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService implements IEntityService<Invoice> {
    @Autowired
    private InvoiceRepository repository;
    @Override
    public IEntityRepository<Invoice> getRepository() {
        return repository;
    }

}
