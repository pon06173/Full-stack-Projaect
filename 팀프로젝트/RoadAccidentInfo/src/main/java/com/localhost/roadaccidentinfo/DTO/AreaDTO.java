package com.localhost.roadaccidentinfo.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class AreaDTO {
    private Long areaIdx;
    private String areaName;
    private Integer sumOfAreaOccurCnt;
    private Integer sumOfAreaCasltCnt;
    private Integer sumOfAreaDprCnt;
    private Integer sumOfAreaSerinjuryCnt;
    private Integer sumOfAreaSltinjuryCnt;
    private Integer sumOfAreaInjuryCnt;
}
