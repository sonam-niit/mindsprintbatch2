package com.mindsprint.springbootapp.repo;

import com.mindsprint.springbootapp.models.Employee;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeRepoImpl implements EmployeeRepo{

    ArrayList<Employee> list= new ArrayList<>();
    @Override
    public Employee addEmployee(Employee employee) {
        employee.setId((int)(Math.random()*1000));
        list.add(employee);
        return employee;
    }
    @Override
    public List<Employee> getAllEmployees() {
        return list;
    }

    @Override
    public Employee getEmployeeById(int id) {
        Employee found=null;
        for(Employee e:list){
            if(e.getId()==id)
                found=e;
        }
        return found;
    }

    @Override
    public boolean deleteEmployee(int id) {
        Employee found=null;
        for(Employee e:list){
            if(e.getId()==id)
                found=e;
        }
        if(found!=null){
            list.remove(found);
            return true;
        }else{
            return  false;
        }
    }
}
