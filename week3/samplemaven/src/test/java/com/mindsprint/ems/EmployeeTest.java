package com.mindsprint.ems;

import com.mindsprint.ems.dao.EmployeeDAO;
import com.mindsprint.ems.dao.EmployeeDAOImpl;
import com.mindsprint.ems.models.Employee;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class EmployeeTest {

    EmployeeDAO dao;
    @BeforeEach
    public void setUp(){
        dao= new EmployeeDAOImpl();
    }
    @AfterEach
    public void tearDown(){
        dao=null;
    }
    @Disabled
    @Test
    public void checkAddEmployee(){
        Employee emp1= new Employee("jack","jack@gmail.com");
        assertEquals(1,dao.addEmployee(emp1));
    }
    @Test
    public void checkList(){
        assertEquals(12,dao.getAllEmployees().size());
    }
    @Test
    public void checkEmployeeById(){
        assertNull(dao.getById(16));
        assertNotNull(dao.getById(10));
    }
}
