package com.example.memo.repository;

import com.example.memo.entity.BoardEntity;
import com.example.memo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BoardRepository extends JpaRepository<BoardEntity, Long>
        , QuerydslPredicateExecutor<BoardEntity>{

  // Spring Data JPA를 사용하여 데이터베이스에서 메모(Board)를 이메일(Email)을 기반으로 찾는데 사용된다.
  @Query("select b from BoardEntity b where b.userEmail.email = :email")
  Optional<List<BoardEntity>> findMemoByEmail(@Param("email") String email);
}
//Spring Data JPA를 활용하여 데이터베이스에서 메모(Board), 이메일(Email)을 기반으로 검색하고 관리할 수 있다.