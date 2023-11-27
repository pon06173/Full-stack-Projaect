package com.localhost.roadaccidentinfo.Service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AccidentServiceTest {

    @Autowired
    private AccidentService accidentService;

    @Test
    void queryByTypeTest() {
        System.out.println("===== 자건거 =====\n" + accidentService.queryByType("자전거"));
    }

    @Test
    void queryByTypeTest2() {
        System.out.println("===== Wrong =====\n" + accidentService.queryByType("XXXX"));
    }
}