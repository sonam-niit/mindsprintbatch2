package com.mindsprint.hello.access;

public class AnotherClass {
    public static void main(String[] args) {
        User user = new User();
//        System.out.println("Private: "+user.id);
        System.out.println("Protected: "+user.name);
        System.out.println("Default: "+user.email);
        System.out.println("Public: "+user.country);
    }
}