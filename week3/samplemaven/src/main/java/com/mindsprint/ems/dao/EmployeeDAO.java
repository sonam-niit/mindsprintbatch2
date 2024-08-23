package com.mindsprint.ems.dao;

import com.mindsprint.ems.models.Employee;

public interface EmployeeDAO {
    public int addEmployee(Employee employee);
    public void getAllEmployees();
    public void deleteEmployee(int id);
}
