package com.example.client.dto.Naver;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResLocalDto {
    private String lastBuildDate;
    private int total;
    private int start;
    private int display;
    private List<ItemList> items;

    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    @Builder
    public static class ItemList {
        private String title;
        private String link;
        private String category;
        private String description;
        private String telephone;
        private String address;
        private String roadAddress;
        private int mapx;
        private int mapy;
    }
}
