package com.localhost.roadaccidentinfo.Entity;


import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "area_t")
@Getter
@Setter
@Builder
@ToString
@Slf4j
@Data
public class AreaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(name="area_name", nullable=false)
    private String areaName;

    @Column(name="sum_of_area_occur_cnt", nullable=false)
    private Integer sumOfAreaOccurCnt;

    @Column(name="sum_of_area_caslt_cnt", nullable=false)
    private Integer sumOfAreaCasltCnt;

    @Column(name="sum_of_area_dpr_cnt", nullable=false)
    private Integer sumOfAreaDprCnt;

    @Column(name="sum_of_area_serinjury_cnt", nullable=false)
    private Integer sumOfAreaSerinjuryCnt;

    @Column(name="sum_of_area_sltinjury_cnt", nullable=false)
    private Integer sumOfAreaSltinjuryCnt;

    @Column(name="sum_of_area_injury_cnt", nullable=false)
    private Integer sumOfAreaInjuryCnt;
}