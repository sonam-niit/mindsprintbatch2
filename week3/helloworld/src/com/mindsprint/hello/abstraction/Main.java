package com.mindsprint.hello.abstraction;

public class Main {
    public static void main(String[] args) {
        Bank bank1= new SBI("SBI","NewMumbai","Mumbai");
        bank1.getRateOfIntrest();
        Bank bank2= new ICICI("ICICI","NewMumbai","Mumbai");
        bank2.getRateOfIntrest();
    }
}
