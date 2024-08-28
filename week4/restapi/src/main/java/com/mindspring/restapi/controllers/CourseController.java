package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Category;
import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.service.CategoryService;
import com.mindspring.restapi.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    private CourseService service;
    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        return  new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return  ResponseEntity.ok(service.getAllCourses());
    }
}
