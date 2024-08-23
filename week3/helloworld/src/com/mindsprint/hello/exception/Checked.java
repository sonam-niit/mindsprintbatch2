package com.mindsprint.hello.exception;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Checked {
    public static void main(String[] args) {
        try{
            FileReader fileReader= new FileReader("D://sonam/hello.txt");
            Thread.sleep(1000);
            Class.forName("drivername");
            DriverManager.getConnection("url");
        }catch(FileNotFoundException e){
            System.out.println(e.getMessage());
        }catch (InterruptedException e){
            System.out.println(e.getMessage());
        }catch (ClassNotFoundException e){
            System.out.println(e.getMessage());
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }catch (Exception e){
            System.out.println("General Exception");
        }

    }
}
