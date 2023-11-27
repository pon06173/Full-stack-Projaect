package com.localhost.roadaccidentinfo.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class MapPlaceDTO {
    private Long mapPlaceIdx;
    private Long areaIdx;
    private String address;
    private Integer sumOfPlaceOccurCnt;
    private Integer sumOfPlaceCasltCnt;
    private Integer sumOfPlaceDprCnt;
    private Integer sumOfPlaceSerinjuryCnt;
    private Integer sumOfPlaceSltinjuryCnt;
    private Integer sumOfPlaceInjuryCnt;
}
