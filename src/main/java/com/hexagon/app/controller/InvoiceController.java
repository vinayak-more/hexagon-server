package com.hexagon.app.controller;

import com.hexagon.app.model.Invoice;
import com.hexagon.app.service.IEntityService;
import com.hexagon.app.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/invoices")
public class InvoiceController extends IEntityController<Invoice> {
    @Autowired
    private InvoiceService service;

    @Override
    public IEntityService<Invoice> getService() {
        return service;
    }
}
