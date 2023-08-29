package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.GreetingServiceEng;
import com.example.demo.service.GreetingServiceKor;
import com.example.demo.service.SampleService;

@RestController
public class SampleController {
	@Autowired
	SampleService sampleService;
	@Autowired
	GreetingServiceEng eng;
	@Autowired
	GreetingServiceKor kor;

	@GetMapping("/sample")
	public String doSample() {
		sampleService.doSomething();
		return ">>> Sample ...";
	}
	
	@GetMapping("/greeting_eng")
	public String greetingEng() {
		eng.sayHello();
		return ">>> Sample ...";
	}
	
	@GetMapping("/greeting_kor")
	public String greetingKor() {
		kor.sayHello();
		return ">>> Sample ...";
	}
}
