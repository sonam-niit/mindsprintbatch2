package com.mindsprint.hello.constructor;

public class Employee {
    int id;
    String name;
    String department;
    double salary;
    public Employee(){
        System.out.println("Constructor called");
    }

    public Employee(String name, String department, double salary) {
        this((int)(Math.random()*100),name,department,salary);
    }
    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", salary=" + salary +
                '}';
    }
    public static void main(String[] args) {
        Employee e1= new Employee();
        System.out.println(e1.department);
        Employee e2= new Employee(1,"alex","finance",98765);
        System.out.println(e2);
        Employee e3= new Employee("bobb","Marketing",28873);
        System.out.println(e3);
    }
}
