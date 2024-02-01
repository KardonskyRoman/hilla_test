package com.example.application.services;

import com.example.application.model.Project;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Endpoint
@AnonymousAllowed
@Service
public class HelloWorldService {

    List<Project> data = new ArrayList<>();

    public HelloWorldService() {
        for (int i = 0; i <= 10; i++) {
            data.add(new Project(String.valueOf(i+1), true));
        }
    }

    public Project getProject() {
        return new Project("",true);
    }

    public List<Project> getProjects() {
        return data;
    }

    public void setProjectStatus(int index, boolean status) {
        data.get(index).setStatus(status);
    }
}
