package com.example.memo.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {

  @Autowired
  UserRepository userRepository;

  @Test
  void findByEmailAndPwTest() {
    var result = userRepository.findByEmailAndPw("asdf@gmail.com","1111");
    System.out.println("TEST - findByEmailAndPwTest(): " + result);
    result = userRepository.findByEmailAndPw("asdf@gmail.com","1234");
    System.out.println("TEST - findByEmailAndPwTest(): " + result);
  }
}