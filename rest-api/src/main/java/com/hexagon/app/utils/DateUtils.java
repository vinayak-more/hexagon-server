package com.hexagon.app.utils;

import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DateUtils {
    private final SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

    public  String parse(Date date) {
        if(date == null){
            return "";
        }
        return sdf.format(date);
    }
}
