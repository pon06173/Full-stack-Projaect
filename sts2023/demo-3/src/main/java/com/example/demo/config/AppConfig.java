package com.example.demo.config;

import com.example.demo.service.GreetingService;
import com.example.demo.service.GreetingServiceKor;
import com.example.demo.service.GreetingServiceEng;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.example.demo")
public class AppConfig {

    @Bean
    public GreetingService greetingService1() {
        return new GreetingServiceKor();
    }

    @Bean
    public GreetingService greetingService2() {
        return new GreetingServiceEng();
    }
}
