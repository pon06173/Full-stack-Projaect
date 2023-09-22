package com.example.hello.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarDto {
    private String name;
    private int age;

    @JsonProperty(value = "car_list")
    private List<car_list> car;

    @NoArgsConstructor
    @AllArgsConstructor
    @Data
    public static class car_list {
        private String name;
        @JsonProperty(value = "car_number")
        private String car_number;
    }
}
