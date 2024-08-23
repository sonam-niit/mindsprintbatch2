package com.mindsprint.hello.abstraction;

public class SBI extends Bank{
    public SBI(String name, String branch, String address) {
        super(name, branch, address);
    }
    @Override
    public void getRateOfIntrest() {
        System.out.println("Rate of Intrest: "+5.9+"%");
    }
}
