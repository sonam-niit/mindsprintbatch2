package com.mindsprint.jdbc;

import java.sql.*;

public class Spdemo {
    public static void main(String[] args) {
        String driver="com.mysql.cj.jdbc.Driver";
        String url="jdbc:mysql://localhost:3306/cms";
        String username="root";
        String password="Sonam@123";
        //load driver
        try {
            Class.forName(driver);
            Connection conn= DriverManager.getConnection(url,username,password);
            CallableStatement stmt= conn.prepareCall("call getAllAccounts()");
            ResultSet set =stmt.executeQuery();
            while (set.next()){
                System.out.println(set.getString(1)+" "+set.getString(2)
                        +" "+set.getDouble(3));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
