package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service(value="greetingServiceEng")
public class GreetingServiceEng implements GreetingService {

	public GreetingServiceEng() {
		System.out.println(">>> GreetingServiceEng 생성자");
	}
	
	@Override
	public String sayHello() {
		System.out.println("Hello world");
		return "Hello world";
	}

}
