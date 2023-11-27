package com.example.memo.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UserDto {
    private String email;
    private String name;
    private String pw;
    private LocalDateTime nowDate;
}
