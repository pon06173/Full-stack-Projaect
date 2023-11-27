package com.example.memo.repository;

import com.example.memo.service.BoardServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class UserEntityRepositoryTest {

  @Autowired
  private BoardServiceImpl boardServiceImpl;

  @Test
  public void getListTest() {

  }
}