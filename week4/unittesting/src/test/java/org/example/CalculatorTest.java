package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    Calculator c;
    @BeforeEach
    public void setUp(){
        System.out.println("Object Created");
        c= new Calculator();
    }
    @AfterEach
    public void tearDown(){
        System.out.println("Destroyed");
        c=null;
    }
    @Test
    public void addTest(){
        System.out.println("Add Test Executed");
        assertEquals(10,c.add(6,4));
    }
    @Disabled
    @Test
    public void subTest(){
        System.out.println("Sub Test Executed");
        assertEquals(10,c.sub(18,8));
    }
}
