package com.example.demo.linearAlg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/linearAlg")
public class LinearAlgController {

    private final LinearAlgService linearAlgService;

    @Autowired
    public LinearAlgController(LinearAlgService linearAlgService) {
        this.linearAlgService = linearAlgService;
    }
}
