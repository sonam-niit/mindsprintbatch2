package org.example;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Address {
    private String street;
    private String city;
    private String zipcode;

    public String getStreet() {
        return street;
    }

    @Value("xyz")
    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }
    @Value("Yamuna nagar")
    public void setCity(String city) {
        this.city = city;
    }

    public String getZipcode() {
        return zipcode;
    }
    @Value("135003")
    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    @Override
    public String toString() {
        return "Address{" +
                "street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }
}
