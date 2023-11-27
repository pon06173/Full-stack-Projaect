package com.example.memo.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class BoardDto {
    private Long idx;
    private String title;
    private String content;
    private LocalDateTime createAt;

    private String Email;
}
//BoardDto 클래스의 목적은 엔티티 클래스 데이터를 다른 레이어(예: 웹 뷰, 서비스 레이어)로 전달하기 위한 용도로 사용됩니다.
