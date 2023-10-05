package com.example.cafe.repository;


import com.example.cafe.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    List<UserEntity> findByNameIsNotNullAndNameEqualsAndCreatedAtGreaterThan(String kevin, LocalDateTime date);
}
