package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Category;
import com.mindspring.restapi.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryService service;
    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        return  new ResponseEntity<>(service.addCategory(category), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories(){
        return  ResponseEntity.ok(service.getAllCategories());
    }
}
