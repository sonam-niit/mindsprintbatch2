package com.mindspring.restapi.repo;

import com.mindspring.restapi.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {
    public Student findByEmail(String email);
}
