package com.mindsprint.hello.basics;

public class TwoDArray {
    public static void main(String[] args) {
        int[][] nums = {{3, 5, 7}, {6, 8, 9, 2}, {1, 2, 0}};
        for (int row = 0; row < nums.length; row++) {
            for (int col = 0; col < nums[row].length; col++) {
                System.out.print(nums[row][col] + "\t");
            }
            System.out.println();
        }

        //for each loop
        for (int[] row : nums) {
            for(int col:row){
                System.out.print(col+"\t");
            }
            System.out.println();
        }
    }
}
