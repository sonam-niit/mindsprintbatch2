package com.mindsprint.hello.oops;

import java.sql.DriverManager;

public class Student {
    int id;
    String name;
    String email;
    String country;

    public void setData(int id,String name,String email,String country){
        this.id=id;
        this.name=name;
        this.email=email;
        this.country=country;
    }
    public void display(){
        System.out.println("Id: "+id);
        System.out.println("name: "+name);
        System.out.println("Email: "+email);
        System.out.println("Country: "+country);
    }

    public static void main(String[] args) {
        Student s1= new Student();
        s1.setData(1,"hello","hello@gmail.com","india");
        s1.display();
        System.out.println();
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
