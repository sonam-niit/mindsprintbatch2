package com.mindspring.restapi.repo;

import com.mindspring.restapi.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepo extends JpaRepository<Course,Long> {

    public List<Course> findByTitle(String title);
}
