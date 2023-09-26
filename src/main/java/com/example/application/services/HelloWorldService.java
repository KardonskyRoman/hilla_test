package com.example.application.services;

import com.example.application.model.Project;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.stereotype.Service;

@BrowserCallable
@AnonymousAllowed
@Service
public class HelloWorldService {

    public Project getProject() {
        return new Project();
    }
}
