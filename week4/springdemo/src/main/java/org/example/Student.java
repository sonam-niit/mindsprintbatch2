package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Student {
    private int id;
    private String name;
    private String email;
    @Autowired
    private Address address;

    public Student(){}
    public Student(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    public int getId() {
        return id;
    }

    @Value("56")
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    @Value("test")
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    @Value("sonam@email.com")
    public void setEmail(String email) {
        this.email = email;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                '}';
    }
}
