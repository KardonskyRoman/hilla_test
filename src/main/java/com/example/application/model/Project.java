package com.example.application.model;

import java.util.ArrayList;
import java.util.List;

public class Project {

    private List<Declarant> declarants;

    private List<String> cadastralNumber;

    String name;

    private boolean status = true;

    public Project(String name, boolean status){
        this.name = name;
        this.status = status;
    }
    
    public String getName(){
        return name;
    }


    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public List<Declarant> getDeclarants() {
        if (declarants == null) {
            declarants = new ArrayList<Declarant>();
        }
        return this.declarants;
    }

    public List<String> getCadastralNumber() {
        if (cadastralNumber == null) {
            cadastralNumber = new ArrayList<String>();
        }
        return this.cadastralNumber;
    }
}
