package com.mindsprint.hello.stringmutability;

public class StringBuilderDemo {
    public static void main(String[] args) {

        StringBuilder builder= new StringBuilder("Hello");
        System.out.println(builder);
        builder.append(" World");
        System.out.println(builder);
        builder.insert(6,"Welcome ");
        System.out.println(builder);
        builder.insert(6,'-');
        builder.reverse();
        System.out.println(builder);
    }
}
