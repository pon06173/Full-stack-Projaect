package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Todo;

import jakarta.transaction.Transactional;

@Repository //Repo로 정의; 컴포넌트이기 때문에 실행 시 바로 정의됨
public interface TodoRepository extends JpaRepository<Todo, Long> { // 인터페이스로 JpaRepo정의, 인수 첫번째는 클래스 이름, 두번째는 기본키 자료형

   // JpaRepo 정의시 save(update 기능으로도 사용), findAll, findById, deleteById 함수가 기본적으로 생성되어 사용할 수 있음
   
   // list() => findAll()
   // search() => findById(ID id)
   // insert() => save(T entity)
   // modify() => update -> save(T entity)
   // delete() => deleteById(ID id)

	@Modifying
	@Transactional
    @Query("UPDATE Todo t SET t.done = :done WHERE t.id = :id") //사용자 정의; RestController에서 사용
    int setDoneById(Long id, boolean done);
   
    List<Todo> findByDone(boolean done);

    // 할일에 달린 댓글들을 가져오는 JPQL 쿼리
    @Query("SELECT t.comments FROM Todo t WHERE t.id = :todoId")
    List<Comment> findCommentsByTodoId(Long todoId);
}
