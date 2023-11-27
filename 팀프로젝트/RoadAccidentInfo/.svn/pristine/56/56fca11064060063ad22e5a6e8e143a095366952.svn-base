package com.localhost.roadaccidentinfo.Service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CountServiceTest {

    @Autowired
    private CountService countService;

    @Test
    void findYearListTest() {
        System.out.println(countService.findYearList());
    }

    @Test
    void findCities() { System.out.println(countService.findCities()); }

    @Test
    void countAccidentByYearTest() {
        System.out.println(countService.countAccidentByYear(2019));
    }

    @Test
    void findCitiesCountTest() { System.out.println(countService.findCitiesCount("서울")); }

    @Test
    void countAccidentSumTest() {
        System.out.println(countService.countAllAccident());
    }

    @Test
    void findAllYearListTest() {
        System.out.println(countService.findAllYearList());
    }

    @Test
    void findAllCitiesCountTest() { System.out.println((countService.findAllCitiesCount())); }
}