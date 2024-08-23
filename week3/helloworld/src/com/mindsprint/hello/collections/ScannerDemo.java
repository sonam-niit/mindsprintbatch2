package com.mindsprint.hello.collections;

import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);

        System.out.println("Enter No");
        int num= Integer.parseInt(scanner.nextLine());
        System.out.println("Enter name");
        String name=scanner.nextLine();
        System.out.println("Address");
        String address=scanner.nextLine();
        System.out.println(name);
        System.out.println(address);
        System.out.println(num);
    }
}
