package com.example.demo.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.example.demo.dto.TodoDto;
import com.example.demo.entity.Todo;

@DataJpaTest
class TodoRepositoryTest {
	@Autowired
    private TestEntityManager entityManager;

	@Autowired
	private TodoRepository todoRepository;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		// 테스트 할 데이터 미리 준비 ...
        Todo todo1 = new Todo();
        todo1.setTitle("밥 먹기");
        todo1.setDone(false);
        entityManager.persist(todo1);

        Todo todo2 = new Todo();
        todo2.setTitle("학교 가서 공부하기");
        todo2.setDone(true);
        entityManager.persist(todo2);

        entityManager.flush();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testSave() {
		// Entity 객체를 생성 해서 테이블에 저장 하는 테스트
		//TodoDto dto = new TodoDto("테스트 할 일");
		//Todo todo = new Todo(dto);
		//todoRepository.save(todo);
	}

	@Test
	void testFindById() {
		Optional<Todo> opt =  todoRepository.findById(1L);
		System.out.println(opt);
	}

	@Test
	void testFindAll() {
		List<Todo> todoList = todoRepository.findAll();
		System.out.println(todoList);
	}

}
