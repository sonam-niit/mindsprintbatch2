package com.mindsprint.hello.basics;

public class Datatypes {
    public static void main(String[] args) {
        int num=10;
        float num2= 56.89f;
        double num3=78.90;
        char c= 'A';
        boolean check= 90>78;
        System.out.println("int: "+num);
        System.out.println("Float: "+num2);
        System.out.println("Double: "+num3);
        System.out.println("Character: "+c);
        System.out.println("Condition: "+check);
        float ddata= (float) num3;//explicit type casting
        long b= num;  //imlicit type casting
    }
}
