package com.example.application.model;

import java.util.ArrayList;
import java.util.List;

public class Project {

    private List<Declarant> declarants;

    protected List<String> cadastralNumber;

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
