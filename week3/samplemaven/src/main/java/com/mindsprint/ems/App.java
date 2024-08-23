package com.mindsprint.ems;

import com.mindsprint.ems.dao.EmployeeDAO;
import com.mindsprint.ems.dao.EmployeeDAOImpl;
import com.mindsprint.ems.models.Employee;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        EmployeeDAO dao= new EmployeeDAOImpl();
        Scanner sc=new Scanner(System.in);
        while (true) {
            System.out.println("Enter 1 for add employee \n2 for GetAll Employees\n3 for Update Employee\n4 " +
                    "for Delete Employee\n5 for System Exit");
            int input=Integer.parseInt(sc.nextLine());
            switch (input){
                case 1:
                    System.out.println("Enter Name");
                    String name= sc.nextLine();
                    System.out.println("Enter Email");
                    String email=sc.nextLine();
                    if(dao.addEmployee(new Employee(name,email))>0)
                        System.out.println("Employee added successfully");
                    else
                        System.out.println("Error while adding employee");
                    break;
                case 2:
                    dao.getAllEmployees(); break;
                case 4:
                    System.out.println("Enter Id for Delete");
                    int id=Integer.parseInt(sc.nextLine());
                    dao.deleteEmployee(id);
                    break;
                case 5:System.exit(0); break;
                default:
                    System.out.println("Enter Correct option");
            }
        }
    }
}
