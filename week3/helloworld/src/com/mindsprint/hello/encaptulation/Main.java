package com.mindsprint.hello.encaptulation;

public class Main {
    public static void main(String[] args) {
        Book b1= new Book(1,"Book1","Author1");
        System.out.println(b1.getId()+" "+b1.getTitle()+" "+b1.getAuthor());
        b1.setTitle("Chapter1");
        System.out.println(b1.getId()+" "+b1.getTitle()+" "+b1.getAuthor());
    }
}
