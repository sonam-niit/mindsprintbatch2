package com.mindsprint.jdbc.project;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class BatchUpdate {
    public static void main(String[] args) {
        try(Connection conn= DBConfig.getConnection();
            Scanner sc= new Scanner(System.in)) {
            String sql= "insert into employee (name,email)values(?,?)";
            PreparedStatement pst= conn.prepareStatement(sql);
            while (true){
                System.out.println("Enter Name");
                String name= sc.nextLine();
                System.out.println("Enter Email");
                String email=sc.nextLine();
                pst.setString(1,name);
                pst.setString(2,email);
                pst.addBatch();
                System.out.println("Enter 1 to exit & any other num to continue");
                if(sc.nextLine().equals("1")) break;
            }
            int[] records=pst.executeBatch();
            System.out.println(records.length+" records inserted in DB");
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
