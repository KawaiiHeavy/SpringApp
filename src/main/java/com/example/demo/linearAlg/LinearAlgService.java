package com.example.demo.linearAlg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LinearAlgService {

    private final LinearAlgRepository linearAlgRepository;

    @Autowired
    public LinearAlgService(LinearAlgRepository linearAlgRepository) {
        this.linearAlgRepository = linearAlgRepository;
    }


}
