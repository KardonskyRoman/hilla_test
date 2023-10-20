package com.example.application.services;

import com.example.application.model.Project;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

import org.springframework.stereotype.Service;

@Endpoint
@AnonymousAllowed
@Service
public class HelloWorldService {

    public Project getProject() {
        return new Project();
    }
}
