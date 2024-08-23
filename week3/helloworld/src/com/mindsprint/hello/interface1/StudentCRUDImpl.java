package com.mindsprint.hello.interface1;

import java.util.ArrayList;
import java.util.List;

public class StudentCRUDImpl implements StudentCRUD{
    List<Student> list= new ArrayList<>();
    @Override
    public void addStudent(Student student) {
        list.add(student);
        System.out.println("Student added successfully");
    }
    @Override
    public void getAllStudents() {
        if(list.isEmpty()){
            System.out.println("List is Empty");
        }else {
            System.out.println("All Students");
            for(Student s:list)
                System.out.println(s);
        }
    }
    @Override
    public void deleteStudent(String name) {
        boolean flag=false;
        for(Student s:list){
            if(s.getName().equals(name)) {
                list.remove(s);
                flag=true;
                break;
            }
        }
        if(flag)
            System.out.println("Student Deleted");
        else
            System.out.println("Student not found to delete");
    }
    //extra method
    public void checkStudent(){

    }
}
