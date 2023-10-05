package com.example.cafe.repository;

import com.example.cafe.entity.UserHistoryEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserHistoryRepositoryTest {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserHistoryRepository userHistoryRepository;

    @Test
    void nToOneTest() {
//INSERT
        var user = userRepository.findById(8L).orElseThrow();

        user.setEmail("hn016768@gmail.com");
        var history = UserHistoryEntity.builder()
                .email(user.getEmail())
                .name(user.getName())
                .user(user)
                .build();
        userHistoryRepository.save(history);
        // .createdAt(user.getCreatedAt())
//                .updatedAt(user.getUpdatedAt())


//        userHistoryRepository.findById(1L).ifPresent(h->{
//            h.getUser().getEmail();
//        });
    }
}