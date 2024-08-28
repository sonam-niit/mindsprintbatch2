package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Student;
import com.mindspring.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService service;
    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return  new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents(){
        return  ResponseEntity.ok(service.getAllStudents());
    }
    @GetMapping("/add/{sid}/course/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        return  new ResponseEntity<>(service.updateCourseById(cid,sid), HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody Student student){
        Student student1= service.login(student);
        if(student1!=null)
            return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
}
