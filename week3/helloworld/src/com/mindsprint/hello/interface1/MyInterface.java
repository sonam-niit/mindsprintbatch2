package com.mindsprint.hello.interface1;

public interface MyInterface {
    public void show();
    public default void display(){
        System.out.println("Display");
    }
    public static void check(){
        System.out.println("Check");
    }
}
