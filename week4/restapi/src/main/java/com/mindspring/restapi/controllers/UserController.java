package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.User;
import com.mindspring.restapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/api/user")
    public ResponseEntity<User> addUser(@RequestBody User user){
        return new ResponseEntity<>(service.addUser(user), HttpStatus.CREATED);
    }
}
