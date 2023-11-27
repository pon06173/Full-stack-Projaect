package com.localhost.roadaccidentinfo.Entity;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "map_place_t")
@Getter
@Setter
@Builder
@ToString
@Slf4j
@Data
public class MapPlaceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(name="area_idx", nullable=false)
    private Long areaIdx;

    @Column(name="address", nullable=false)
    private String address;

    @Column(name="sum_of_place_occur_cnt", nullable=false)
    private Integer sumOfPlaceOccurCnt;

    @Column(name="sum_of_place_caslt_cnt", nullable=false)
    private Integer sumOfPlaceCasltCnt;

    @Column(name="sum_of_place_dpr_cnt", nullable=false)
    private Integer sumOfPlaceDprCnt;

    @Column(name="sum_of_place_serinjury_cnt", nullable=false)
    private Integer sumOfPlaceSerinjuryCnt;

    @Column(name="sum_of_place_sltinjury_cnt", nullable=false)
    private Integer sumOfPlaceSltinjuryCnt;

    @Column(name="sum_of_place_injury_cnt", nullable=false)
    private Integer sumOfPlaceInjuryCnt;
}
