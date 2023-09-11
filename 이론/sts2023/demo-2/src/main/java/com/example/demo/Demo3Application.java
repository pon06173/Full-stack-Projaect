package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import com.example.demo.service.SampleService;

@SpringBootApplication
@EnableAspectJAutoProxy
public class Demo3Application {

	public static void main(String[] args) {
		SpringApplication.run(Demo3Application.class, args);
		
//		SampleService sampleService = new SampleService();
//		sampleService.doSomething();
	}
}
