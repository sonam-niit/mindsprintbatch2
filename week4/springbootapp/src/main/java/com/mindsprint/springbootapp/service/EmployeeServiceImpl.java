package com.mindsprint.springbootapp.service;

import com.mindsprint.springbootapp.models.Employee;
import com.mindsprint.springbootapp.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    EmployeeRepo repo;
    @Override
    public Employee addEmployee(Employee employee) {
        return repo.addEmployee(employee);
    }
    @Override
    public List<Employee> getAllEmployees() {
        return repo.getAllEmployees();
    }
    @Override
    public Employee getEmployeeById(int id) {
        return repo.getEmployeeById(id);
    }
    @Override
    public boolean deleteEmployee(int id) {
        return repo.deleteEmployee(id);
    }
}
