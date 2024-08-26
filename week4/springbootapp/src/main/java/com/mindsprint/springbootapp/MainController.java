package com.mindsprint.springbootapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping(value = "/api/hello",method = RequestMethod.GET)
    public String getHello(){
        return "Hello World";
    }
}
