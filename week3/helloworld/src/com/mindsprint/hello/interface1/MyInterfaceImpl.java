package com.mindsprint.hello.interface1;

public class MyInterfaceImpl implements MyInterface,StudentCRUD{
    @Override
    public void addStudent(Student student) {

    }

    @Override
    public void getAllStudents() {
        System.out.println("Test");
    }

    @Override
    public void deleteStudent(String name) {

    }

    @Override
    public void show() {

    }

    @Override
    public void display() {
        MyInterface.super.display();
    }
}
