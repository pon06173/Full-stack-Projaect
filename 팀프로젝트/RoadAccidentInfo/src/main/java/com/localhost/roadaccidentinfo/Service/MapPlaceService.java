package com.localhost.roadaccidentinfo.Service;

import com.localhost.roadaccidentinfo.DTO.AreaDTO;
import com.localhost.roadaccidentinfo.DTO.MapPlaceDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Entity.AreaEntity;
import com.localhost.roadaccidentinfo.Entity.MapPlaceEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AreaRepository;
import com.localhost.roadaccidentinfo.Repository.MapPlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class MapPlaceService {
    private final AccidentRepository accidentRepository;
    private final AreaRepository areaRepository;
    private final MapPlaceRepository mapPlaceRepository;

    public void createMapPlaceListData(List<String> mapPlaceList) {
        int list_size = mapPlaceList.size();
        System.out.println("리스트 사이즈: " + list_size);

        for(int i=0; i<list_size; i++) {
            Integer areaOccurCntSum = 0; // 발생 건수
            Integer areaCasltCntSum = 0; // 사상자수
            Integer areaDprsCntSum = 0; // 사망자수
            Integer areaSerinjryIndvdlCntSum = 0; // 중상자수
            Integer areaSltinjryIndvdlCntSum = 0; // 경상자수
            Integer areaInjuryAplcntCntSum = 0; // 부상자수

            List<AccidentEntity> accidentites = accidentRepository.findByMapPlaceAddress(mapPlaceList.get(i));
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

            int stringIdx1 = mapPlaceList.get(i).indexOf(" ");
            String item_address1 = mapPlaceList.get(i).substring(0, stringIdx1);

            String item_address2 = mapPlaceList.get(i).substring(stringIdx1+1);
            int stringIdx2 = item_address2.indexOf(" ");
            String item_address3 = item_address2.substring(0, stringIdx2);

            String result_address = item_address1 + " " + item_address3;
            AreaEntity areaItem = areaRepository.findByAreaName(result_address);
            Long areaIdx = areaItem.getIdx();

            MapPlaceDTO mapPlaceItem = MapPlaceDTO.builder()
                    .mapPlaceIdx((long)(i+1))
                    .areaIdx(areaIdx)
                    .address(mapPlaceList.get(i))
                    .sumOfPlaceOccurCnt(areaOccurCntSum)
                    .sumOfPlaceCasltCnt(areaCasltCntSum)
                    .sumOfPlaceDprCnt(areaDprsCntSum)
                    .sumOfPlaceSerinjuryCnt(areaSerinjryIndvdlCntSum)
                    .sumOfPlaceSltinjuryCnt(areaSltinjryIndvdlCntSum)
                    .sumOfPlaceInjuryCnt(areaInjuryAplcntCntSum)
                    .build();
            saveMapPlaceData(mapPlaceItem);
        }
    }

    public List<MapPlaceEntity> queryMapPlace(String query) {

        if(mapPlaceRepository.findByAddressContains(query) != null) {
            return mapPlaceRepository.findByAddressContains(query);
        }
        return null;
    }

    public MapPlaceDTO queryMapPlaceByIdx(String query) {

        try {
            Long idx = Long.parseLong(query);
            if(mapPlaceRepository.findByIdx(idx) != null) {
                return mapPlaceEntityToDto(mapPlaceRepository.findByIdx(idx));
            }
            return null;
        } catch (NumberFormatException e) {
            return MapPlaceDTO.builder()
                    .areaIdx(0L)
                    .build();
        }

    }


    // mapPlace 레퍼지토리에 맵 위치 엔티티 저장
    public MapPlaceDTO saveMapPlaceData(MapPlaceDTO dto){
        var entity = mapPlaceRepository.save(mapPlaceDtoToEntity(dto));
        return mapPlaceEntityToDto(entity);
    }
    public MapPlaceEntity mapPlaceDtoToEntity(MapPlaceDTO dto){
        return MapPlaceEntity.builder()
                .areaIdx(dto.getAreaIdx())
                .address(dto.getAddress())
                .sumOfPlaceOccurCnt(dto.getSumOfPlaceOccurCnt())
                .sumOfPlaceCasltCnt(dto.getSumOfPlaceCasltCnt())
                .sumOfPlaceDprCnt(dto.getSumOfPlaceDprCnt())
                .sumOfPlaceSerinjuryCnt(dto.getSumOfPlaceSerinjuryCnt())
                .sumOfPlaceSltinjuryCnt(dto.getSumOfPlaceSltinjuryCnt())
                .sumOfPlaceInjuryCnt(dto.getSumOfPlaceInjuryCnt())
                .build();
    }

    public MapPlaceDTO mapPlaceEntityToDto(MapPlaceEntity entity){
        return MapPlaceDTO.builder()
                .mapPlaceIdx(entity.getIdx())
                .areaIdx(entity.getAreaIdx())
                .address(entity.getAddress())
                .sumOfPlaceOccurCnt(entity.getSumOfPlaceOccurCnt())
                .sumOfPlaceCasltCnt(entity.getSumOfPlaceCasltCnt())
                .sumOfPlaceDprCnt(entity.getSumOfPlaceDprCnt())
                .sumOfPlaceSerinjuryCnt(entity.getSumOfPlaceSerinjuryCnt())
                .sumOfPlaceSltinjuryCnt(entity.getSumOfPlaceSltinjuryCnt())
                .sumOfPlaceInjuryCnt(entity.getSumOfPlaceInjuryCnt())
                .build();
    }

}
