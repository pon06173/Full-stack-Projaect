package com.example.cafe.repository;

import com.example.cafe.entity.UserEntity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    void crudTest(){
        var user = UserEntity.builder()
                .name("kim44")
                .email("kim44@gmail.com")
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        userRepository.save(user);

//        Optional<UserEntity> ou = userRepository.findById(1L);
//        if(ou.isPresent()) {
//            System.out.println(ou.get());
//        }

        //userRepository.findAll().stream().forEach(System.out::println);

    }

    @Test
    void dummyData() {
//        var users = Arrays.asList(
//                UserEntity.builder().name("jason").email("jason@gmail.com").createdAt(LocalDateTime.now()).updatedAt(LocalDateTime.now()).build(),
//                UserEntity.builder().name("turkey").email("turkey@gmail.com").createdAt(LocalDateTime.now()).updatedAt(LocalDateTime.now()).build(),
//                UserEntity.builder().name("keros").email("keros@gmail.com").createdAt(LocalDateTime.now()).updatedAt(LocalDateTime.now()).build()
//                );
//
//        userRepository.saveAll(users);
        System.out.println("----------------------------------------");
        userRepository.findAll().stream().forEach(System.out::println);
    }

    @Test
    void jpaMethodTest() {
//        var users
//                = userRepository.findAll(Sort.by(Sort.Direction.DESC, "name"));
//        users.stream().forEach(System.out::println);

        userRepository.findAllById(Arrays.asList(1L, 3L, 5L))
                .stream().forEach(System.out::println);
        userRepository.count();

    }

    @Test
    void quizTest(){
//        userRepository.findById(1L).ifPresent(u->userRepository.delete(u));
//        userRepository.findAll().stream().forEach(System.out::println);

        var user = UserEntity.builder()
                .name("korea")
                .email("korea@gmail.com")
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        var saveUser = userRepository.save(user);
        saveUser.setEmail("kavin2@korea.com");
        userRepository.save(saveUser);
    }

    @Test
    void queryMethodTest() {
//        Optional<UserEntity> user = userRepository.findByEmail("david@gmail.com");
//        user.ifPresent(e->System.out.println(e));
        String dateMag = "2023-10-01 00:00:00";
        var formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        var date = LocalDateTime.parse(dateMag, formatter);

        List<UserEntity> userList = userRepository
                .findByNameIsNotNullAndNameEqualsAndCreatedAtGreaterThan("kavin", date);
                userList.stream().forEach(System.out::println);
    }

    @Transactional
    @Test
    void oneToN(){
        userRepository.findById(3L).ifPresent(u->{
            System.out.println("-----------------------------");
            u.getHistories().stream().forEach(h->System.out.println(h));
        });
    }

    @Test
    void historyTest(){

    }



}