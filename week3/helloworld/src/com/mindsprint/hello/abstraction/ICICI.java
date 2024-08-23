package com.mindsprint.hello.abstraction;

public class ICICI extends Bank{

    public ICICI(String name, String branch, String address) {
        super(name, branch, address);
    }
    @Override
    public void getRateOfIntrest() {
        System.out.println("Rate of Intrest: "+6.7+"%");
    }
}
