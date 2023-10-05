package com.example.client.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class MyFoodDto {

    private String resultCode;
    private String imgUrl;
    private String title;
    private String category;
    private String addr;
    private String roadAddr;
    private String homepage;

}
