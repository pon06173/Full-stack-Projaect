package com.localhost.roadaccidentinfo.Service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AccidentTypeServiceTest {

    @Autowired
    private AccidentTypeService accidentTypeService;

    @Test
    void queryTypeTest() {
        System.out.println(accidentTypeService.queryTypeIdx("자전거"));
    }

    @Test
    void searchAndCreateAccidentTypeListTest() {
        accidentTypeService.searchAndCreateAccidentTypeList();
    }
}