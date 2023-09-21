package com.example.hello.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data // getter, setter 자동 생성
public class UserInfoDto {
    private String id;
    private String pw;
    private String name;
    private String location;
}
