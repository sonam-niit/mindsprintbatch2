package com.mindsprint.hello.throwdemo;

import java.util.Scanner;

public class ThrowDemo1 {
    public static  void check(int age) throws AgeNotValidException{
        if(age<18)
            throw new AgeNotValidException();
        else
            System.out.println("Valid User");
    }
    public  static void checkAge() throws  AgeNotValidException{
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter your age");
        check(sc.nextInt());
    }

    public static void main(String[] args) {
        try {
            ThrowDemo1.checkAge();
        } catch (AgeNotValidException e) {
            System.out.println(e.getMessage());
            System.out.println(e);
            e.printStackTrace();
        }
    }
}
