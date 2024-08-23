package com.mindsprint.hello.interface1;
//POJO plain old java object
public class Student {
    private int id;
    private String name;
    private String country;
    public Student(String name, String country) {
        this.id = (int)(Math.random()*100);
        this.name = name;
        this.country = country;
    }public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
