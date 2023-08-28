package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.TodoDTO;

@RestController
public class TodoList {
//   private static ArrayList<Map> todoList = new ArrayList<Map>();
//   private static Map<String, Object> todoObj = null;
//   static {
//      
//         todoObj = new HashMap<String, Object>();
//         todoObj.put("seq", i+1);
//         todoObj.put("title", "해야 할 일 " + i);
//         todoObj.put("done", false);
//         todoList.add(todoObj);
//      }
//   }
   
   private static ArrayList<TodoDTO> todoList = new ArrayList<TodoDTO>();
   public TodoList() {
      for(int i=0; i<10; i++) {
         todoList.add(new TodoDTO(i+1, "새 할 일 " + i, false));
      }
   }
   
   @GetMapping("/list.todo")
   public Object list() {
      //String todoListJSON = "[{\"seq\":1, \"title\":\"공부하기\",  \"done\":false},{\"seq\":2, \"title\":\"공부하기2\",  \"done\":false},{\"seq\":3, \"title\":\"공부하기3\",  \"done\":false}]";
      //return todoListJSON;
      return todoList;
   }
   
   @GetMapping("/get.todo")
   public Object getTodo(TodoDTO dto) {
      System.out.println("GET - /get.todo");
      int idx = todoList.indexOf(new TodoDTO(dto.getSeq(),null, false));
      if(idx != -1) {
    	  todoList.get(idx);
      }
      return null;
   }
   
   @PostMapping("/insert.todo")
   public Object insert(TodoDTO dto) {
      System.out.println("GET - /insert.todo");
      
      todoList.add(dto);
      
      return todoList;
   }
   
   @PostMapping("/update.todo")
   public Object update(TodoDTO dto) {
      System.out.println("GET - /update.todo");
      int idx = todoList.indexOf(new TodoDTO(dto.getSeq(),null, false));
      if(idx != -1) {
    	  todoList.set(idx, dto);
      }
      return todoList;
   }
   
   
   @GetMapping("/delete.todo")
   public Object delete(TodoDTO dto) {
      System.out.println("GET - /delete.todo");
      int idx  = todoList.indexOf(new TodoDTO(dto.getSeq(), null, false));
      if(idx != -1) {
         todoList.remove(idx);
      }
      return todoList;
   }
}