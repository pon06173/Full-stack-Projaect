package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Todo;

@Repository //Repo로 정의; 컴포넌트이기 때문에 실행 시 바로 정의됨
public interface TodoRepository extends JpaRepository<Todo, Long> { // 인터페이스로 JpaRepo정의, 인수 첫번째는 클래스 이름, 두번째는 기본키 자료형

   // JpaRepo 정의시 save(update 기능으로도 사용), findAll, findById, deleteById 함수가 기본적으로 생성되어 사용할 수 있음
   
   // list() => findAll()
   // search() => findById(ID id)
   // insert() => save(T entity)
   // modify() => update -> save(T entity)
   // delete() => deleteById(ID id)

   @Query("UPDATE Todo t SET t.done = :done WHERE t.id = :id") //사용자 정의; RestController에서 사용
    int setDoneById(Long id, boolean done);
}