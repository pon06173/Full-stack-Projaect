package com.example.demo.log;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	
	@Before("execution(* com.example.demo.service.*.*(..))")
	public void logBefore() {
		System.out.println("Method execution started ...");
	}
	
	@After("execution(* com.example.demo.service.*.*(..))")
	public void logAfter() {
		System.out.println("Method execution end ...");
	}
}
