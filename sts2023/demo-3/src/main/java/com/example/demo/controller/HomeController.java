package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.service.GreetingService;

@Controller
public class HomeController {
	private GreetingService service;
	
	public HomeController(@Qualifier("greetingService1")GreetingService service) {
		this.service = service;
		System.out.println(">>> HomeController 생성자");
	}
	
	@GetMapping("/")
	public String home() {
		service.sayHello();
		return "home";
	}
}