package com.example.cafe.repository;

import com.example.cafe.entity.UserEntity;
import org.apache.catalina.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {
    @Autowired
    UserRepository userRepository;

    @Test
    void crudTest() {
        //INSERT
        var user = UserEntity.builder()
                .name("kim44")
                .email("kim44@gmail.com")
                .build();

//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())

        userRepository.save(user);

        //SELECT
//        Optional<UserEntity> ou = userRepository.findById(1L);
//        if(ou.isPresent()) {
//            System.out.println(ou.get());
//        }

        //SELECT ALL
        userRepository.findAll().stream().forEach(System.out::println);
//        userRepository.findAll().stream().forEach(e-> System.out.println(e));
    }

    @Test
    void dummyData() {
        var users = Arrays.asList(
                UserEntity.builder().name("kevin").email("kevin@gmail.com").createdAt(LocalDateTime.now()).updatedAt(LocalDateTime.now()).build(),
                UserEntity.builder().name("david").email("david@gmail.com").createdAt(LocalDateTime.now()).updatedAt(LocalDateTime.now()).build(),
                UserEntity.builder().name("steve").email("steve@gmail.com").createdAt(LocalDateTime.now()).updatedAt(LocalDateTime.now()).build()
        );
        userRepository.saveAll(users);
        System.out.println("----------------------------------------");
        userRepository.findAll().stream().forEach(System.out::println);
    }

    @Test
    void jpaMethodTest() {
//        var users
//                = userRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
//        users.stream().forEach(System.out::println);

        userRepository.findAllById(Arrays.asList(1L, 3L, 5L))
                .stream().forEach(System.out::println);
        userRepository.count();
    }

    @Test
    void deleteTest() {
        userRepository.findById(1L).ifPresent(u->userRepository.delete(u));
        //userRepository.deleteById(1L);
        userRepository.findAll().stream().forEach(System.out::println);
    }

    @Test
    void updateTest() {
        var user = UserEntity.builder()
                .name("kim")
                .email("kim@gmail.com")
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        var saveUser = userRepository.save(user);

        saveUser.setEmail("kavin2@gmail.com");
        userRepository.save(saveUser);
    }

    @Test
    void queryMethodTest() {
        //테이블에 삽입된 데이터 확인
        userRepository.findAll().stream().forEach(System.out::println);

        //찾으려는 이름을 name컬럼에서 찾기
//        List<UserEntity> userList = userRepository.findByName("kevin");
//        if(!userList.isEmpty()){
//            userList.stream().forEach(System.out::println);
//        }

        //찾으려는 이메일을 email컬럼에서 찾기
//        Optional<UserEntity> user = userRepository.findByEmail("kevin@gmail.com");
//        user.ifPresent(e->System.out.println(e));

//        //찾으려는 이름과 이메일을 name컬럼과 email컬럼에서 찾기
//        List<UserEntity> userList = userRepository.findByNameAndEmail("kevin", "kevin@gmail.com");
//        if(!userList.isEmpty()){
//            userList.stream().forEach(System.out::println);
//        }

        String dateMag = "2023-10-05 00:00:00";
        var formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        var date = LocalDateTime.parse(dateMag, formatter);
        List<UserEntity> userList = userRepository.findByNameIsNotNullAndNameEqualsAndCreatedAtGreaterThan("kevin", date);
        userList.stream().forEach(System.out::println);
    }

    @Transactional
    @Test
    void oneToN() {
        userRepository.findById(7L).ifPresent(u->{
            System.out.println("---------------------------------------------------------------------------------");
            u.getHistories().stream().forEach(h->System.out.println(h));
        });
    }
}