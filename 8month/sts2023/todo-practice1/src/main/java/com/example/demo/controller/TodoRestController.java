package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Comment;
import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;
import com.example.demo.service.CommentService;
import com.example.demo.service.TodoService;

@RestController
public class TodoRestController {
	@Autowired
	TodoRepository todoRepo;
	
	@Autowired
    private TodoService todoService;
	
	@Autowired
    private CommentService commentService;
	
	@GetMapping("/api/todos")
    public List<Todo> index() {
    	List<Todo> todos = todoService.findAll();  // 모든 Todo 객체를 찾아 리스트에 담습니다.
    	
    	if(todos != null) {
    		return todos;
    	}
        return new ArrayList<>();  // 리스트를 반환합니다.
    }
    
    @PostMapping("/api/todos")
    public Todo addTodo(@RequestBody Todo newTodo) {
    	System.out.println(">>>>>>>>>> POST - /api/todos " + newTodo);
        todoService.save(newTodo);
        return newTodo;  // 저장된 Todo 객체를 반환합니다.
    }

	// update 기능: 검색 된 레코드를 수정해서 다시  save()
    @PostMapping("/api/todos/complete")
    public String completeTodo(@RequestParam Long id) {
        todoService.completeTodo();
        return "redirect:/";
    }

    @PostMapping("/api/todos/{todoId}/comments")
    //public ResponseEntity<Todo> addCommentToTodo(@PathVariable Long todoId, @RequestBody Comment comment) {
    public Todo addCommentToTodo(@PathVariable Long todoId, @RequestBody Comment comment) {
    	//Todo updatedTodo = todoService.addCommentToTodo(todoId, comment);
        todoService.addCommentToTodo(todoId, comment);
        Todo updatedTodo = todoService.findById(todoId);
    	//return ResponseEntity.ok(updatedTodo);
        return updatedTodo;
    }

    @GetMapping("/api/todos/{todoId}/comments")
    public List<Comment> getCommentsByTodo(@PathVariable Long todoId) {
        Todo todo = todoService.findById(todoId);
        
        List<Comment> commentList = todoRepo.findCommentsByTodoId(todoId);
        
        //return ResponseEntity.ok(commentList);
        return commentList;
    }
	
	
	@PostMapping("/api/todos/insert")
	public Todo insert(@RequestParam("title") String title) {
		System.out.println("insert() - save(T entity)");
		Todo newTodo = new Todo(null, title, false, null);
		todoRepo.save(newTodo);
		return newTodo;
	}
	
	@GetMapping("/api/todos/{id}")
	public Todo getTodo(@PathVariable("id") Long id) {
		System.out.println("get() search기능  - findById(ID id) " + id);
		Optional<Todo> todo = todoRepo.findById(id);
		return todo.get();
	}
	
	@GetMapping("/api/todos/complete/{id}")
	public List<Todo> complete(@PathVariable("id") Long id) {
		System.out.println("/todos/complete id : " + id);
		
		todoRepo.setDoneById(id, true);
		
		List<Todo> todoList = todoRepo.findAll();
		return todoList==null ? new ArrayList<>() : todoList;
	}
	
	@PutMapping("/api/todos/{id}")
	public List<Todo> update(@PathVariable("id") Long id, @RequestBody Todo newTodo) {
		System.out.println("/todos/complete id : " + id);
		Todo todo = todoRepo.findById(id).get();
		todo.setTitle(newTodo.getTitle());
		todo.setDone(newTodo.isDone());
		// 수정기능 : 변경된 객체를 다시 save
		todoRepo.save(todo);
		
		List<Todo> todoList = todoRepo.findAll();
		return todoList==null ? new ArrayList<>() : todoList;
	}
}