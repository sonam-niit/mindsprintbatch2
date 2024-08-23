package com.mindsprint.hello.interface1;

public class GUI {
    public static void main(String[] args) {
        StudentCRUD crud= new StudentCRUDImpl();
        Student s1= new Student("sonam","india");
        Student s2= new Student("alex","india");

        crud.addStudent(s1);
        crud.addStudent(s2);
        crud.getAllStudents();
        crud.deleteStudent("sonam");
        System.out.println();
    }
}
