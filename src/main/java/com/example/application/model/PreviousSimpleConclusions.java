package com.example.application.model;

import java.util.ArrayList;
import java.util.List;

public class PreviousSimpleConclusions {

    protected List<PreviousSimpleConclusion> previousSimpleConclusion;

    public List<PreviousSimpleConclusion> getPreviousSimpleConclusion() {
        if (previousSimpleConclusion == null) {
            previousSimpleConclusion = new ArrayList<PreviousSimpleConclusion>();
        }
        return this.previousSimpleConclusion;
    }

}
