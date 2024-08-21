package com.mindsprint.hello.basics;

import java.util.Scanner;

public class Array2 {
    public static void main(String[] args) {
        int[] nums = new int[5];
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < nums.length; i++) {
            System.out.println("Enter num");
            nums[i] = scanner.nextInt();
        }
        //print array
        for (int num : nums)
            System.out.println(num);
    }
}
