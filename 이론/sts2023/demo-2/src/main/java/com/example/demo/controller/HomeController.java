package com.example.demo.controller;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//@RestController
@Controller
public class HomeController {

	@GetMapping("/")
	public String home(Model model) {
		System.out.println("Get - / 호출 ...");
		
		model.addAttribute("message","Hello Spring Boot world!");
		
		return "home";
	}
}
