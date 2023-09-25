package com.example.hello.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDto {
    private String email;
    private String name;

    @JsonProperty(value = "my_hobby")
    private HobbyDto myHobby;
    @NoArgsConstructor
    @AllArgsConstructor
    @Data
    public static class HobbyDto {
        private String name;
        private String use;
        private int terms;
    }
}
