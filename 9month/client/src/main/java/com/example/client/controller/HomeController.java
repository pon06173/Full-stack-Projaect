package com.example.client.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@RequestMapping("/home")
@Controller
public class HomeController {
    @GetMapping("/search")
    public String search(){
        log.info("search in....");
        return "/search.html";
    }
}
