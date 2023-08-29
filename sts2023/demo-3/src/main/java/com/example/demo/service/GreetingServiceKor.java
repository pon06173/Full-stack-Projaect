package com.example.demo.service;

public class GreetingServiceKor implements GreetingService {

	public GreetingServiceKor() {
		System.out.println(">>> GreetingServiceKor 생성자");
	}
	
	@Override
	public void sayHello() {
		System.out.println("안녕 세계!");
	}

}