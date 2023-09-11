package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;

@Controller
public class TodoController {
   @Autowired
   TodoRepository todoRepo;
   
   @GetMapping("/todos")
   public String list(Model model) {
      System.out.println("list() - findAll()");
      List<Todo> todoList = todoRepo.findAll();
      model.addAttribute("todos", todoList);
      return "list";
   }
   
   @GetMapping("/todos/insert")
   public String insert() {
      System.out.println("GET으로 요청 - input.html 템플릿으로 포워드");
      return "input";
   }
   @PostMapping("/todos/insert")
   public String insertOk(@RequestParam("title") String title) {
      System.out.println("insert() - save(T entity)");
      Todo newTodo = new Todo(null, title, false);
      todoRepo.save(newTodo);
      return "redirect:/todos";
   }
   
   @GetMapping("/todos/detail")
   public String detail(Model model, @RequestParam("id") Long id) {
      System.out.println("detail() search기능  - findById(ID id)");
      Optional<Todo> todo = todoRepo.findById(id);
      model.addAttribute("todo", todo.get());
      return "detail";
   }
   
   @GetMapping("/todos/modify")
   public String modify(Model model, @RequestParam("id") Long id) {
      System.out.println("modify() - update기능 save(T entity)를 이용한다.");
      Optional<Todo> todo = todoRepo.findById(id);
      model.addAttribute("todo", todo.get());
      return "modify";
   }
   
   @GetMapping("/todos/delete")
   public String delete(Model model, @RequestParam("id") Long id) {
      System.out.println("delete() - deleteById(ID id)");
      Optional<Todo> todo = todoRepo.findById(id);
      model.addAttribute("todo", todo.get());
      return "delete";
   }
   @PostMapping("/todos/complete")
   public String complete(Model model, @RequestParam("id") Long id) {
      System.out.println("/todos/complete id : " + id);
      Todo todo = null;
      
      return "redirect:/todos";
   }
}