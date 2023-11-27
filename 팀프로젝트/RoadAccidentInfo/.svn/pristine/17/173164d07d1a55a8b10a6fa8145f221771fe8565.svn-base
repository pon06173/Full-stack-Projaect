package com.localhost.roadaccidentinfo.Service;

import com.localhost.roadaccidentinfo.DTO.CountCityDTO;
import com.localhost.roadaccidentinfo.DTO.CountDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AreaRepository;
import com.localhost.roadaccidentinfo.Repository.MapPlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CountService {

    private final AccidentRepository accidentRepository;

    // ==================== 테이블의 특정 값 중복 제거해서 출력하는 함수 ====================

    //저장된 데이터들의 연도 목록을 출력하는 함수
    public List<Integer> findYearList() {

        List<AccidentEntity> accidentEntityList = accidentRepository.findAll();
        HashSet<Integer> distinctList = new HashSet<>();

        for(AccidentEntity entity: accidentEntityList) {
            distinctList.add(entity.getAccidentYear());
        }

        List<Integer> afterList = new ArrayList<>(distinctList);

        afterList.sort((i1, i2) -> i2 - i1);

        return afterList;
    }

    //저장된 도시 리스트를 출력하는 함수
    public List<String> findCities() {

        List<AccidentEntity> entityList = accidentRepository.findAll();

        HashSet<String> hashSetList = new HashSet<>();

        for(AccidentEntity entity: entityList) {
            String area = entity.getAccidentArea();
            String[] parts = area.split(" ", 2);
            hashSetList.add(parts[0]);
        }

        return new ArrayList<>(hashSetList);

    }

    // ================================================================================

    // ==================== 인수를 받아 특정 범위의 정보를 출력하는 함수 ====================


    //연도를 인수로 받아 그 해 사고 횟수를 출력하는 함수
    public CountDTO countAccidentByYear(Integer year) {
        try {
            List<AccidentEntity> entityList = accidentRepository.findByAccidentYear(year);

            Integer accidentOccurCnt = 0;
            Integer accidentCasltCnt = 0;
            Integer accidentDprCnt = 0;
            Integer accidentSerinjuryCnt = 0;
            Integer accidentSltinjuryCnt = 0;
            Integer accidentInjuryCnt = 0;

            for(AccidentEntity entity: entityList) {
                accidentOccurCnt += entity.getSumOfAccidentOccurCnt();
                accidentCasltCnt += entity.getSumOfAccidentCasltCnt();
                accidentDprCnt += entity.getSumOfAccidentDprCnt();
                accidentSerinjuryCnt += entity.getSumOfAccidentSerinjuryCnt();
                accidentSltinjuryCnt += entity.getSumOfAccidentSltinjuryCnt();
                accidentInjuryCnt += entity.getSumOfAccidentInjuryCnt();
            }

            return CountDTO.builder()
                    .countIdx(1)
                    .year(year)
                    .accidentOccurCnt(accidentOccurCnt)
                    .accidentCasltCnt(accidentCasltCnt)
                    .accidentDprCnt(accidentDprCnt)
                    .accidentSerinjuryCnt(accidentSerinjuryCnt)
                    .accidentSltinjuryCnt(accidentSltinjuryCnt)
                    .accidentInjuryCnt(accidentInjuryCnt)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    //연도를 인수로 받아 그 해 사고 횟수를 출력하는 함수
    public CountDTO countAccidentByYearAndType(Integer year, Long typeIdx) {
        try {
            List<AccidentEntity> entityList = accidentRepository.findByAccidentYearAndAccidentTypeIdx(year, typeIdx);

            Integer accidentOccurCnt = 0;
            Integer accidentCasltCnt = 0;
            Integer accidentDprCnt = 0;
            Integer accidentSerinjuryCnt = 0;
            Integer accidentSltinjuryCnt = 0;
            Integer accidentInjuryCnt = 0;

            for(AccidentEntity entity: entityList) {
                accidentOccurCnt += entity.getSumOfAccidentOccurCnt();
                accidentCasltCnt += entity.getSumOfAccidentCasltCnt();
                accidentDprCnt += entity.getSumOfAccidentDprCnt();
                accidentSerinjuryCnt += entity.getSumOfAccidentSerinjuryCnt();
                accidentSltinjuryCnt += entity.getSumOfAccidentSltinjuryCnt();
                accidentInjuryCnt += entity.getSumOfAccidentInjuryCnt();
            }

            return CountDTO.builder()
                    .countIdx(1)
                    .year(year)
                    .accidentOccurCnt(accidentOccurCnt)
                    .accidentCasltCnt(accidentCasltCnt)
                    .accidentDprCnt(accidentDprCnt)
                    .accidentSerinjuryCnt(accidentSerinjuryCnt)
                    .accidentSltinjuryCnt(accidentSltinjuryCnt)
                    .accidentInjuryCnt(accidentInjuryCnt)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public CountDTO countAccidentByYearAndTypeAndArea(Integer year, Long typeIdx, String area) {
        try {
            List<AccidentEntity> entityList = accidentRepository.findByAccidentYearAndAccidentTypeIdxAndArea(year, typeIdx, area);

            Integer accidentOccurCnt = 0;
            Integer accidentCasltCnt = 0;
            Integer accidentDprCnt = 0;
            Integer accidentSerinjuryCnt = 0;
            Integer accidentSltinjuryCnt = 0;
            Integer accidentInjuryCnt = 0;

            for(AccidentEntity entity: entityList) {
                accidentOccurCnt += entity.getSumOfAccidentOccurCnt();
                accidentCasltCnt += entity.getSumOfAccidentCasltCnt();
                accidentDprCnt += entity.getSumOfAccidentDprCnt();
                accidentSerinjuryCnt += entity.getSumOfAccidentSerinjuryCnt();
                accidentSltinjuryCnt += entity.getSumOfAccidentSltinjuryCnt();
                accidentInjuryCnt += entity.getSumOfAccidentInjuryCnt();
            }

            return CountDTO.builder()
                    .countIdx(1)
                    .year(year)
                    .accidentOccurCnt(accidentOccurCnt)
                    .accidentCasltCnt(accidentCasltCnt)
                    .accidentDprCnt(accidentDprCnt)
                    .accidentSerinjuryCnt(accidentSerinjuryCnt)
                    .accidentSltinjuryCnt(accidentSltinjuryCnt)
                    .accidentInjuryCnt(accidentInjuryCnt)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    //도시를 인수로 받아 해당 도시의 사고 횟수를 출력하는 함수
    public CountCityDTO findCitiesCount(String city) {

        List<AccidentEntity> entityList = accidentRepository.findByAccidentAreaContains(city);

        Integer accidentOccurCnt = 0;
        Integer accidentCasltCnt = 0;
        Integer accidentDprCnt = 0;
        Integer accidentSerinjuryCnt = 0;
        Integer accidentSltinjuryCnt = 0;
        Integer accidentInjuryCnt = 0;

        String area = entityList.get(0).getAccidentArea();
        String[] parts = area.split(" ", 2);


        for(AccidentEntity entity: entityList) {
            accidentOccurCnt += entity.getSumOfAccidentOccurCnt();
            accidentCasltCnt += entity.getSumOfAccidentCasltCnt();
            accidentDprCnt += entity.getSumOfAccidentDprCnt();
            accidentSerinjuryCnt += entity.getSumOfAccidentSerinjuryCnt();
            accidentSltinjuryCnt += entity.getSumOfAccidentSltinjuryCnt();
            accidentInjuryCnt += entity.getSumOfAccidentInjuryCnt();
        }

        return CountCityDTO.builder()
                .countIdx(1)
                .city(parts[0])
                .accidentOccurCnt(accidentOccurCnt)
                .accidentCasltCnt(accidentCasltCnt)
                .accidentDprCnt(accidentDprCnt)
                .accidentSerinjuryCnt(accidentSerinjuryCnt)
                .accidentSltinjuryCnt(accidentSltinjuryCnt)
                .accidentInjuryCnt(accidentInjuryCnt)
                .build();


    }

    // ================================================================================


    //전체 사고 횟수를 출력하는 함수
    public CountDTO countAllAccident() {
        List<AccidentEntity> entityList = accidentRepository.findAll();

        Integer accidentOccurCnt = 0;
        Integer accidentCasltCnt = 0;
        Integer accidentDprCnt = 0;
        Integer accidentSerinjuryCnt = 0;
        Integer accidentSltinjuryCnt = 0;
        Integer accidentInjuryCnt = 0;

        for(AccidentEntity entity: entityList) {
            accidentOccurCnt += entity.getSumOfAccidentOccurCnt();
            accidentCasltCnt += entity.getSumOfAccidentCasltCnt();
            accidentDprCnt += entity.getSumOfAccidentDprCnt();
            accidentSerinjuryCnt += entity.getSumOfAccidentSerinjuryCnt();
            accidentSltinjuryCnt += entity.getSumOfAccidentSltinjuryCnt();
            accidentInjuryCnt += entity.getSumOfAccidentInjuryCnt();
        }

        return CountDTO.builder()
                .countIdx(1)
                .accidentOccurCnt(accidentOccurCnt)
                .accidentCasltCnt(accidentCasltCnt)
                .accidentDprCnt(accidentDprCnt)
                .accidentSerinjuryCnt(accidentSerinjuryCnt)
                .accidentSltinjuryCnt(accidentSltinjuryCnt)
                .accidentInjuryCnt(accidentInjuryCnt)
                .build();

    }

    //연도별 사고 횟수를 출력하는 함수
    public List<CountDTO> findAllYearList() {

        List<Integer> yearList = findYearList();
        List<CountDTO> dtoList = new ArrayList<>();

        for (Integer year: yearList) {
            dtoList.add(countAccidentByYear(year));
        }

        return dtoList;

    }

    //테이블에 저장된 모든 도시의 사고 횟수를 출력하는 함수
    public List<CountCityDTO> findAllCitiesCount() {

        List<String> cities = findCities();
        List<CountCityDTO> countCityDTOS = new ArrayList<>();

        for(String city: cities) {
            countCityDTOS.add(findCitiesCount(city));
        }

        return countCityDTOS;

    }

}
