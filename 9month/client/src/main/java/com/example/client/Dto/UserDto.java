package com.example.client.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserDto {
    private String name;
    private Integer age;

    @Builder.Default
    private List<CarDto> cars = new ArrayList<>();

    @NoArgsConstructor
    @AllArgsConstructor
    @Data
    @Builder
    public static class CarDto {//static을 쓰면 메모리 누수를 피할 수 있다. 외부 클래스가 내부 클래스 변수를 사용하는 것을 방지할 수 있다. static은 실행 시 메모리에 제일 먼저 상주
        private String name;
        @JsonProperty(value = "car_num")
        private String carNum;
        @JsonProperty(value = "owner")
        private boolean isOwner;
    }

}
