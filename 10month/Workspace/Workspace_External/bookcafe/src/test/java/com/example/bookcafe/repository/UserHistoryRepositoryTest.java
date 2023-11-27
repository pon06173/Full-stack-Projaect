package com.example.bookcafe.repository;

import com.example.bookcafe.entity.UserEntity;
import com.example.bookcafe.entity.UserHistoryEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserHistoryRepositoryTest {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserHistoryRepository userHistoryRepository;

    @Test
    void nToOneTest(){
        var user = userRepository.findById(2L).orElseThrow();
        user.setEmail("david99@gmail.com");

        var history = UserHistoryEntity.builder()
                .email(user.getEmail())
                .name(user.getName())
//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())
                .user(user)
                .build();

        userHistoryRepository.save(history);

//        userHistoryRepository.findById(1L).ifPresent(h->{
//            h.getUser().getEmail();
//
//        });


    }

}