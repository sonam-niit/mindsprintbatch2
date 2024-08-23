package com.mindsprint.hello.collections;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

public class LinkedHashSetDemo {
    public static void main(String[] args) {
        Set<String> set= new LinkedHashSet<>();
        set.add("alex");
        set.add("jack");
        set.add("john");
        set.add("tracy");
        set.add("tracy");
        System.out.println(set);
    }
}
