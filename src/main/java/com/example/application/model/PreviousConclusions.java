package com.example.application.model;

import java.util.ArrayList;
import java.util.List;


public class PreviousConclusions {

    protected List<PreviousConclusion> previousConclusion;

    
    public List<PreviousConclusion> getPreviousConclusion() {
        if (previousConclusion == null) {
            previousConclusion = new ArrayList<PreviousConclusion>();
        }
        return this.previousConclusion;
    }

}
