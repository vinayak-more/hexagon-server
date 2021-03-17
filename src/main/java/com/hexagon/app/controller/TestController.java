package com.hexagon.app.controller;

import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.FileOutputStream;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    ResourceLoader resourceLoader;

    @GetMapping(
            produces = MediaType.APPLICATION_PDF_VALUE
    )
    public @ResponseBody
    byte[] test() throws Exception {
        Document document = new Document();
        PdfWriter writer = PdfWriter.getInstance(document,
                new FileOutputStream("html.pdf"));
        document.open();
        XMLWorkerHelper.getInstance().parseXHtml(writer, document,
                new FileInputStream(resourceLoader.getResource("classpath:/templates/sample.html").getFile()));
        document.close();
        return new FileInputStream("html.pdf").readAllBytes();
    }
}
