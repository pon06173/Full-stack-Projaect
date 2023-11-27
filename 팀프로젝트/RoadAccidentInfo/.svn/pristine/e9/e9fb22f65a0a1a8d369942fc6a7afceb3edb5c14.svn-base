package com.localhost.roadaccidentinfo.Service;

import com.localhost.roadaccidentinfo.DTO.AreaDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Entity.AreaEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AreaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class AreaService {
    private final AccidentRepository accidentRepository;
    private final AreaRepository areaRepository;
    public void createAreaListData(List<String> areaList) {
        int list_size = areaList.size();
        System.out.println("리스트 사이즈: " + list_size);

        for(int i=0; i<list_size; i++) {
            Integer areaOccurCntSum = 0; // 발생 건수
            Integer areaCasltCntSum = 0; // 사상자수
            Integer areaDprsCntSum = 0; // 사망자수
            Integer areaSerinjryIndvdlCntSum = 0; // 중상자수
            Integer areaSltinjryIndvdlCntSum = 0; // 경상자수
            Integer areaInjuryAplcntCntSum = 0; // 부상자수

            List<AccidentEntity> accidentites = accidentRepository.findByAccidentArea(areaList.get(i));
            System.out.println(accidentites.size());
            System.out.println(accidentites);
            for(int j=0; j< accidentites.size(); j++){
                areaOccurCntSum += accidentites.get(j).getSumOfAccidentOccurCnt();
                areaCasltCntSum += accidentites.get(j).getSumOfAccidentCasltCnt();
                areaDprsCntSum += accidentites.get(j).getSumOfAccidentDprCnt();
                areaSerinjryIndvdlCntSum += accidentites.get(j).getSumOfAccidentSerinjuryCnt();
                areaSltinjryIndvdlCntSum += accidentites.get(j).getSumOfAccidentSltinjuryCnt();
                areaInjuryAplcntCntSum += accidentites.get(j).getSumOfAccidentInjuryCnt();
            }
            AreaDTO areaItem = AreaDTO.builder()
                    .areaIdx((long)(i+1))
                    .areaName(areaList.get(i))
                    .sumOfAreaOccurCnt(areaOccurCntSum)
                    .sumOfAreaCasltCnt(areaCasltCntSum)
                    .sumOfAreaDprCnt(areaDprsCntSum)
                    .sumOfAreaSerinjuryCnt(areaSerinjryIndvdlCntSum)
                    .sumOfAreaSltinjuryCnt(areaSltinjryIndvdlCntSum)
                    .sumOfAreaInjuryCnt(areaInjuryAplcntCntSum)
                    .build();
            saveAreaData(areaItem);
        }
    }

    public List<AreaDTO> queryArea(String query) {

        try {
            List<AreaDTO> dtoList = new ArrayList<>();
            List<AreaEntity> entityList = areaRepository.findByAreaNameContains(query);

            for(AreaEntity entity: entityList) {
                dtoList.add(AreaEntityToDTO(entity));
            }
            return dtoList;

        } catch (NullPointerException e) {
            return null;
        }

    }

    public AreaDTO queryAreaByIdx(String query) {
        try {
            return AreaEntityToDTO(areaRepository.findByIdx(Long.parseLong(query)));
        } catch (NumberFormatException e) {
            return AreaDTO.builder()
                    .areaIdx(0L)
                    .build();
        }
    }

    public AreaDTO saveAreaData(AreaDTO dto){
        var entity = areaRepository.save(AreaDtoToEntity(dto));
        return AreaEntityToDTO(entity);
    }


    public AreaDTO AreaEntityToDTO(AreaEntity areaEntity) {
        return AreaDTO.builder()
                .areaIdx(areaEntity.getIdx())
                .areaName(areaEntity.getAreaName())
                .sumOfAreaOccurCnt(areaEntity.getSumOfAreaOccurCnt())
                .sumOfAreaCasltCnt(areaEntity.getSumOfAreaCasltCnt())
                .sumOfAreaDprCnt(areaEntity.getSumOfAreaDprCnt())
                .sumOfAreaSerinjuryCnt(areaEntity.getSumOfAreaSerinjuryCnt())
                .sumOfAreaSltinjuryCnt(areaEntity.getSumOfAreaSltinjuryCnt())
                .sumOfAreaInjuryCnt(areaEntity.getSumOfAreaInjuryCnt())
                .build();
    }

    public AreaEntity AreaDtoToEntity(AreaDTO areaDTO) {
        return AreaEntity.builder()
                .idx(areaDTO.getAreaIdx())
                .areaName(areaDTO.getAreaName())
                .sumOfAreaOccurCnt(areaDTO.getSumOfAreaOccurCnt())
                .sumOfAreaCasltCnt(areaDTO.getSumOfAreaCasltCnt())
                .sumOfAreaDprCnt(areaDTO.getSumOfAreaDprCnt())
                .sumOfAreaSerinjuryCnt(areaDTO.getSumOfAreaSerinjuryCnt())
                .sumOfAreaSltinjuryCnt(areaDTO.getSumOfAreaSltinjuryCnt())
                .sumOfAreaInjuryCnt(areaDTO.getSumOfAreaInjuryCnt())
                .build();
    }


//    private Long areaIdx;
//    private String areaName;
//    private Integer sumOfAreaOccurCnt;
//    private Integer sumOfAreaCasltCnt;
//    private Integer sumOfAreaDprCnt;
//    private Integer sumOfAreaSerinjuryCnt;
//    private Integer sumOfAreaSltinjuryCnt;
//    private Integer sumOfAreaInjuryCnt;


}

