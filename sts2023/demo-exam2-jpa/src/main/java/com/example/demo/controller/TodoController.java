package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    // Create
    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }

    // Read (All)
    @GetMapping
    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    // Read (Single)
    @GetMapping("/{id}")
    public Todo get(@PathVariable Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    // Update
    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo todo) {
        Todo existingTodo = todoRepository.findById(id).orElse(null);
        if (existingTodo != null) {
            existingTodo.setTask(todo.getTask());
            existingTodo.setCompleted(todo.isCompleted());
            return todoRepository.save(existingTodo);
        }
        return null;
    }

    // Delete
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        todoRepository.deleteById(id);
    }
}
