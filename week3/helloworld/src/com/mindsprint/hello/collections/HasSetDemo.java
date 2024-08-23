package com.mindsprint.hello.collections;

import java.util.HashSet;
import java.util.Set;

public class HasSetDemo {
    public static void main(String[] args) {
        Set<String> set= new HashSet<>();
        set.add("alex");
        set.add("jack");
        set.add("john");
        set.add("tracy");
        set.add("tracy");
        System.out.println(set);
    }
}
