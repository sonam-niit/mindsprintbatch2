package com.mindsprint.jdbc.project;

import java.util.List;

public interface EmployeeDAO {
    public int addEmployee(Employee employee);
    public void getAllEmployees();
    public void deleteEmployee(int id);
}
