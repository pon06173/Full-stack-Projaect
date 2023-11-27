package com.localhost.roadaccidentinfo.Entity;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
@Entity
@ToString
@Table(name = "accident_t")
public class AccidentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    private Long accidentTypeIdx;
    private String accidentArea;

    private String mapPlaceAddress;

    @Column(name="accident_year", nullable=false)
    private Integer accidentYear;

    @Column(name="sum_of_accident_occur_cnt", nullable=false)
    private Integer sumOfAccidentOccurCnt;

    @Column(name="sum_of_accident_caslt_cnt", nullable=false)
    private Integer sumOfAccidentCasltCnt;

    @Column(name="sum_of_accident_dpr_cnt", nullable=false)
    private Integer sumOfAccidentDprCnt;

    @Column(name="sum_of_accident_serinjury_cnt", nullable=false)
    private Integer sumOfAccidentSerinjuryCnt;

    @Column(name="sum_of_accident_sltinjury_cnt", nullable=false)
    private Integer sumOfAccidentSltinjuryCnt;

    @Column(name="sum_of_accident_injury_cnt", nullable=false)
    private Integer sumOfAccidentInjuryCnt;

    @Column(name="latitude", nullable=false, precision = 10, scale = 7)
    private BigDecimal latitude;

    @Column(name="longitude", nullable=false,precision = 10, scale = 7)
    private BigDecimal longitude;
}
