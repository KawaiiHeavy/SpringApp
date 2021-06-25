package com.example.demo.linearAlg;

import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.Column;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class LinearAlgConfig {

    @Bean
    CommandLineRunner commandLineRunner(LinearAlgRepository linearAlgRepository){
        return args -> {
            LinearAlg matrix1 = new LinearAlg(
                    "1 2 3 4",
                    2,
                    2
            );
            LinearAlg matrix2 = new LinearAlg(
                    "1",
                    1,
                    1
            );
            linearAlgRepository.saveAll(List.of(matrix1, matrix2));
        };
    }
}
