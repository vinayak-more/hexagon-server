package com.hexagon.app.service;

import com.hexagon.app.model.Invoice;
import com.hexagon.app.model.Trip;
import com.hexagon.app.repository.IEntityRepository;
import com.hexagon.app.repository.InvoiceRepository;
import com.hexagon.app.utils.DateUtils;
import com.hexagon.app.utils.NumberUtils;
import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.styledxmlparser.css.media.MediaDeviceDescription;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.StringWriter;

@Service
public class InvoiceService extends IEntityService<Invoice> {
    static {
        Velocity.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
        Velocity.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
    }

    @Autowired
    private InvoiceRepository repository;

    @Autowired
    private DateUtils dateUtils;

    @Autowired
    private NumberUtils numberUtils;

    @Override
    public IEntityRepository<Invoice> getRepository() {
        return repository;
    }

    public byte[] generateInvoice(long invoiceId) throws Exception {
        Invoice invoice = repository.getOne(invoiceId);
        StringWriter sw = parseVelocityTemplate(invoice);

        ConverterProperties props = new ConverterProperties();
        props.setMediaDeviceDescription(new MediaDeviceDescription(com.itextpdf.styledxmlparser.css.media.MediaType.PRINT));
        // HTML file to PDF
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        HtmlConverter.convertToPdf(new ByteArrayInputStream(sw.toString().getBytes()),
                baos, props);
        System.out.println("PDF Created!");
        return baos.toByteArray();
    }

    private StringWriter parseVelocityTemplate(Invoice invoice) {
        VelocityEngine ve = new VelocityEngine();
        ve.init();
        Template t = ve.getTemplate("invoice-templates/invoice-template.vm");
        VelocityContext vc = new VelocityContext();
        populateVelocityContext(vc, invoice);

        StringWriter sw = new StringWriter();
        t.merge(vc, sw);
        return sw;
    }

    private void populateVelocityContext(VelocityContext vc, Invoice invoice) {
        vc.put("invoice", invoice);
        vc.put("client", invoice.getClient());
        vc.put("trips", invoice.getTrips());
        vc.put("dateUtils", dateUtils);
        vc.put("invoiceCost", invoice.getTrips().stream().mapToDouble(Trip::getCost).sum());
        vc.put("invoiceCostWords", numberUtils.convert((int) invoice.getTrips().stream().mapToDouble(Trip::getCost).sum()));
    }

}
