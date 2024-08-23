package com.mindsprint.hello.abstraction;

abstract public class Bank {
    private String name;
    private String branch;
    private String address;
    public Bank(String name, String branch, String address) {
        this.name = name;
        this.branch = branch;
        this.address = address;
    }
   abstract public void getRateOfIntrest();

    public String getName() {
        return name;
    }

    public String getBranch() {
        return branch;
    }

    public String getAddress() {
        return address;
    }
}
