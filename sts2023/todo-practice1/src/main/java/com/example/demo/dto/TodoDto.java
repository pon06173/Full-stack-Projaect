package com.example.demo.dto;

import com.example.demo.entity.Todo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {
	private Long id;
	private String title;
	private Boolean done;
	
	public TodoDto(Long id) {
		this.id = id;
	}
	
	public TodoDto(String title) {
		this.title = title;
	}
	
	public TodoDto(Todo entity) {
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.done = entity.isDone();
	}
	
	public static TodoDto toDto(Todo entity) {
		return new TodoDto(entity);
	}
}
