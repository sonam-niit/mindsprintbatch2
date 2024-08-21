package com.mindsprint.hello.oops;

public class TestSOP {
    static String name="Sonam Soni";

    public static void main(String[] args) {
        System.out.println(TestSOP.name.toUpperCase());
        Integer num=10;//object integer
        System.out.println(num);
        Student s1= new Student();s1.setData(1,"test","test","india");
        System.out.println(s1);
    }
}
