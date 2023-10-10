package com.example.application.model;

import java.util.ArrayList;
import java.util.List;

public class Project {

    private List<Declarant> declarants;

    private List<String> cadastralNumber;

    protected PreviousConclusions previousConclusions;

    protected PreviousSimpleConclusions previousSimpleConclusions;

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

    public PreviousConclusions getPreviousConclusions() {
        return previousConclusions;
    }

    public void setPreviousConclusions(PreviousConclusions value) {
        this.previousConclusions = value;
    }

    public PreviousSimpleConclusions getPreviousSimpleConclusions() {
        return previousSimpleConclusions;
    }

    public void setPreviousSimpleConclusions(PreviousSimpleConclusions value) {
        this.previousSimpleConclusions = value;
    }
}
