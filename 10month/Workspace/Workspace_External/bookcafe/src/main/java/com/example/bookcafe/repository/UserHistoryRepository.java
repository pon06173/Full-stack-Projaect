package com.example.bookcafe.repository;

import com.example.bookcafe.entity.UserHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface UserHistoryRepository extends JpaRepository<UserHistoryEntity, Long> {
}
