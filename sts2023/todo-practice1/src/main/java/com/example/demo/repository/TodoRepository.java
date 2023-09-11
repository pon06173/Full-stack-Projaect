package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Comment;
import com.example.demo.entity.Todo;

import jakarta.transaction.Transactional;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
	// 기본적으로 사용 가능한 자동 생성 되는 메서드들
	// save(T entity)
	// update기능 save(T entity)를 이용한다.
	// findAll()
	// findByDi(ID id)
	// deleteById(ID id)
	
		@Modifying
    @Transactional
    @Query("UPDATE Todo t SET t.done = :done WHERE t.id = :id")
    int setDoneById(Long id, boolean done);
		
		List<Todo> findByDone(boolean done);

    // 할일에 달린 댓글들을 가져오는 JPQL 쿼리
    @Query("SELECT t.comments FROM Todo t WHERE t.id = :todoId")
    List<Comment> findCommentsByTodoId(Long todoId);
}