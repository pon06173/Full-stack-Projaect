package com.example.client.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class MyFoodServiceTest {

    @Autowired
    MyFoodService myFoodService;

    @Test
    void search() {
        System.out.println(myFoodService.search("국수"));
    }
    }


