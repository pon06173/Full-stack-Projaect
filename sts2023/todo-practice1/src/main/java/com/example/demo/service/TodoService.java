package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Comment;
import com.example.demo.entity.Todo;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.TodoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private CommentRepository commentRepository;

    public Todo addCommentToTodo(Long todoId, Comment comment) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new EntityNotFoundException("Todo not found"));

        comment.setTodo(todo);
        commentRepository.save(comment);

        return todo;
    }

	public Todo findById(Long todoId) {
		Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new EntityNotFoundException("Todo not found"));
		return todo;
	}

	public List<Todo> findAll() {
		return todoRepository.findAll();
	}

	public void save(Todo todo) {
		todoRepository.save(todo);
	}

	public void completeTodo() {
		// TODO Auto-generated method stub
		
	}
}