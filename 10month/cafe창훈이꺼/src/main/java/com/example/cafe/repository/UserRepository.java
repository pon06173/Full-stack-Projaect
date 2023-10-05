package com.example.cafe.repository;

import com.example.cafe.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    List<UserEntity> findByName(String name);
    Optional<UserEntity> findByEmail(String email);

    List<UserEntity> findByNameAndEmail (String name, String email);

    List<UserEntity> findByNameIsNotNullAndNameEqualsAndCreatedAtGreaterThan (String name, LocalDateTime createdAt);
}