package com.example.memo.repository;

import com.example.memo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, String> {
  // Spring Data JPA를 사용하여 데이터베이스에서 사용자 정보를 조회하는 데 사용된다.
  @Query("select m from UserEntity m where m.email=:email and m.pw=:pw")
  Optional<UserEntity> findByEmailAndPw(@Param("email") String email, @Param("pw") String pw);
}

