package com.mindsprint.hello.strings;

public class StringDemo {
    public static void main(String[] args) {
        String s1="Hello World";
        String s2="Hello World";
        String s3= new String("Hello World");

        System.out.println(s1==s2);//true
        System.out.println(s1==s3);//false
        System.out.println(s1.equals(s3));

    }
}
