package com.mindsprint.hello.constructor;

public class Static {

    static int num=0;
    static public void test(){
        System.out.println(num);
    }
    public static void main(String[] args) {
        test();
        for (int i=1;i<=10;i++){
            num++;
        }
        test();
    }
}
