package com.example.application.model;

public class Organization {

    private String name;
    private Address address;

    public String getName() {
        return name;
    }

    public void setName(String name){
        this.name = name;
    }


    public void setAddress(Address address){
        this.address = address;
    }

    public Address getAddress() {
        return address;
    }

}
