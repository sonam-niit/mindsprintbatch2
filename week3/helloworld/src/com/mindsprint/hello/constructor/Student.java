package com.mindsprint.hello.constructor;

public class Student {
    String name;
    int[] grades;
    public Student(String name, int[] grades) {
        this.name = name;
        this.grades = grades;
    }
    public double calculateAverage(){
        double sum=0;
        for(int n: grades)
            sum+=n;
        return  sum/grades.length;
    }
    public void displayInfo(){
        System.out.println("Name: "+name);
        System.out.println("Result: "+ this.calculateAverage());
    }

    public static void main(String[] args) {
        Student s1= new Student("Ayush",new int[]{56,67,78,89,90});
        Student s2= new Student("Anshika",new int[]{89,90,67,89,67});
        Student s3= new Student("Harsh",new int[]{56,67,78,89,90});
        Student s4= new Student("Jiya",new int[]{56,67,78,89,90});
        Student[] students={s1,s2,s3,s4};
        for(Student s:students){
            s.displayInfo();
        }

    }
}
