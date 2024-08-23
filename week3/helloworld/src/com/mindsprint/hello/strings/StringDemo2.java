package com.mindsprint.hello.strings;

public class StringDemo2 {
    public static void main(String[] args) {
//        String s1="Hello";
//        s1=s1+" World";
//        System.out.println(s1);
//        System.out.println("Length: "+s1.length());
//        System.out.println("LowerCase: "+s1.toLowerCase());
//        System.out.println("UpperCase: "+s1.toUpperCase());
//        char[] data=s1.toCharArray();
        String message="welcome to the world of strings";
        String array[]= message.split(" ");
        for(String a:array){
            System.out.print(a.substring(0,1).toUpperCase()+a.substring(1)+" ");
        }
    }
}
