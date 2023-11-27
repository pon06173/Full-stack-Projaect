package com.localhost.roadaccidentinfo.Service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MapPlaceServiceTest {

    @Autowired
    MapPlaceService mapPlaceService;

    @Test
    void queryMapPlaceTest() {
        System.out.println(mapPlaceService.queryMapPlace("기기기"));
    }
}