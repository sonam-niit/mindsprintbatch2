package com.mindsprint.ems.dao;

import com.mindsprint.ems.models.Employee;

import java.util.List;

public interface EmployeeDAO {
    public int addEmployee(Employee employee);
    public List<Employee> getAllEmployees();
    public void deleteEmployee(int id);
    public Employee getById(int id);
}
