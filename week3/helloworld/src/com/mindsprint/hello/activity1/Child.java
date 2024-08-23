package com.mindsprint.hello.activity1;

import com.mindsprint.hello.access.User;

public class Child extends User {
    public static void main(String[] args) {
        Child child= new Child();

//        System.out.println("Private: "+child.id);//private no access
        System.out.println("Protected: "+child.name);
//        System.out.println("Default: "+child.email); //default no access
        System.out.println("Public: "+child.country);
    }
}
