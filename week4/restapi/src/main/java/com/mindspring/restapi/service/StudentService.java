package com.mindspring.restapi.service;

import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.models.Student;
import com.mindspring.restapi.repo.CourseRepo;
import com.mindspring.restapi.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class StudentService {
    @Autowired
    private StudentRepo repo;
    @Autowired
    private CourseRepo courseRepo;
    public Student addStudent(Student student){
        return  repo.save(student);
    }
    public List<Student> getAllStudents(){
        return repo.findAll();
    }
    public Student updateCourseById(Long cid,Long sid){
        Student student= repo.findById(sid).orElse(null);
        if(student!=null){
            Course course= courseRepo.findById(cid).orElse(null);
            Set<Course> set= student.getCourses();
            set.add(course);
            student.setCourses(set);
            return  repo.save(student);
        }
        return  null;
    }
    public  Student login(Student student){
        Student existing= repo.findByEmail(student.getEmail());
        if(existing!=null){
            if(existing.getPassword().equals(student.getPassword()))
                return  existing;
        }
        return null;
    }
}
