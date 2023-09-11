package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;

@RestController
public class TodoRestController {
   @Autowired
   TodoRepository todoRepo;
   
   @GetMapping("/api/todos")
   public List<Todo> list() {
      System.out.println("list() - findAll()");
      List<Todo> todoList = todoRepo.findAll();
      return todoList==null ? new ArrayList<>() : todoList;
   }
   
   @PostMapping("/api/todos/insert")
   public Todo insert(@RequestParam("title") String title) {
      System.out.println("insert() - save(T entity)");
      Todo newTodo = new Todo(null, title, false);
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