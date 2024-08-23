package com.mindsprint.hello.exception;

import java.io.FileReader;
import java.util.Scanner;

public class SampleExc1 {
    public static void main(String[] args) {
        try(Scanner sc= new Scanner(System.in); FileReader reader=new FileReader("")) {
        System.out.println("Enter any number");
        int num1= sc.nextInt();
        System.out.println("Enter any number");
        int num2= sc.nextInt();

            int result= num1/num2;
            System.out.println(result);
        }catch (Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
//        finally {
//            sc.close();
//            System.out.println("Scanner closed");
//        }
    }
}
