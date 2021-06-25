package com.example.demo.linearAlg;

import javax.persistence.*;

@Entity
@Table
public class LinearAlg {

    @Id
    @SequenceGenerator(
            name = "matrix_sequence",
            sequenceName = "matrix_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "matrix_sequence"
    )
    private Long id;
    private String numbers;
    private Integer sizeX;
    private Integer sizeY;

    public LinearAlg() {
    }

    public LinearAlg(String numbers, Integer sizeX, Integer sizeY) {
        this.numbers = numbers;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumbers() {
        return numbers;
    }

    public void setNumbers(String numbers) {
        this.numbers = numbers;
    }

    public Integer getSizeX() {
        return sizeX;
    }

    public void setSizeX(Integer sizeX) {
        this.sizeX = sizeX;
    }

    public Integer getSizeY() {
        return sizeY;
    }

    public void setSizeY(Integer sizeY) {
        this.sizeY = sizeY;
    }

    @Override
    public String toString() {
        return "LinearAlg{" +
                "id=" + id +
                ", numbers='" + numbers + '\'' +
                ", sizeX=" + sizeX +
                ", sizeY=" + sizeY +
                '}';
    }
}
