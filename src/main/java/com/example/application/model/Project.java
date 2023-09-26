package com.example.application.model;

import java.util.ArrayList;
import java.util.List;

public class Project {
    
    private List<Declarant> declarants;

     public List<Declarant> getDeclarants() {
        if (declarants == null) {
            declarants = new ArrayList<Declarant>();
        }
        return this.declarants;
    }

}
