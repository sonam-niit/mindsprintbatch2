package com.mindsprint.hello.basics;

public class Array {
    public static void main(String[] args) {
        int[] numbers={1,2,3,4,5,6,7,8,9};
        String[] names={"a","b","c","d"};
        System.out.println(numbers[4]);
        for(int i=0;i<numbers.length;i++){
            System.out.println(numbers[i]);
        }
        //enhanced for loop
        for(String name:names)
            System.out.println(name);
    }
}
