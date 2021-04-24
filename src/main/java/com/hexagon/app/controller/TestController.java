package com.hexagon.app.controller;

import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.styledxmlparser.css.media.MediaDeviceDescription;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("/test")
public class TestController {



    @GetMapping(produces = MediaType.APPLICATION_PDF_VALUE, value = "/1")
    public @ResponseBody
    byte[] testVelocity() throws Exception {
        Velocity.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
        Velocity.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());

        VelocityEngine ve = new VelocityEngine();
        ve.init();
        Template t = ve.getTemplate("invoice-templates/invoice-template.vm");
        VelocityContext vc = new VelocityContext();
        vc.put("title", "Sakharam G. More");

        StringWriter sw = new StringWriter();
        t.merge(vc, sw);

        ConverterProperties props = new ConverterProperties();
        props.setMediaDeviceDescription(new MediaDeviceDescription(com.itextpdf.styledxmlparser.css.media.MediaType.PRINT));
        // HTML file to PDF
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        HtmlConverter.convertToPdf(new ByteArrayInputStream(sw.toString().getBytes()),
                baos, props);


        System.out.println("PDF Created!");
        return baos.toByteArray();
    }
}
