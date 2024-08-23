package com.mindsprint.hello.inheritance;

class Person{
    int id;
    String name;
    Person(int id,String name){
        this.id=id;
        this.name=name;
    }
    public void display(){
        System.out.println("Id:"+id+" Name: "+name);
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
class Employee extends Person{
    int empCode;
    String department;
    public Employee(int id,String name, int empCode,String department){
        super(id,name);
        this.empCode=empCode;
        this.department=department;
    }
    public void display(){
        super.display();
        System.out.println("Employee Code:"+empCode+" Department: "+department);
    }

    @Override
    public String toString() {
        return "Employee{" + super.toString()+" "+
                "empCode=" + empCode +
                ", department='" + department + '\'' +
                '}';
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Employee e1= new Employee(1,"Sonam",34567,"IT");
        System.out.println(e1);
        System.out.println(e1.department);
    }
}
