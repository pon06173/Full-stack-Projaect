package com.example.bookcafe.repository;

import com.example.bookcafe.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    List<UserEntity> findByName(String name);
    Optional<UserEntity> findByEmail(String email);

    ///Q2. name이 null이 아니고 이름이 kavin이고 생성시간이 2023-10-01 이후인 사용자를 출력하라.

    List<UserEntity> findByNameIsNotNullAndNameEqualsAndCreatedAtGreaterThan
            (String name, LocalDateTime createdAt);



}
