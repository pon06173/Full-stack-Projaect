package com.example.demo.entity;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TodoEntityTest {
	
	Todo entity = new Todo(100L, "Test todo", false);

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.out.println(">>>> setUpBeforeClass");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		System.out.println(">>>> tearDownAfterClass");
	}

	@BeforeEach
	void setUp() throws Exception {
		System.out.println(">>>> setUp");
	}

	@AfterEach
	void tearDown() throws Exception {
		System.out.println(">>>> tearDown");
	}

	@Test
	void testGetId() {
		assertEquals(entity.getId(), 100L);
	}
	
	@Test
	void testGetTitle() {
		assertEquals(entity.getTitle(), "Test todo");
	}
}
