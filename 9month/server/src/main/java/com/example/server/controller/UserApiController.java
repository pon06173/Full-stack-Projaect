package com.example.server.controller;

import com.example.server.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

@Slf4j
@RequestMapping(path = "/apis/server")
@RestController
public class UserApiController {
    //http://localhost:9090/apis/server?name=kim&age=1
    /*
    //server response data
    *
    {
	    "name":"kim",
	    "age": 1,
	    "cars": [
    		{"name":"audi1", "car_num":"50-1231", "owner": true},
    		{"name":"audi3", "car_num":"50-1231", "owner": false},
    		{"name":"audi5", "car_num":"50-1231", "owner": true}
    	]
    }
    */

//    @GetMapping(path = "")
//    public UserDto get(@RequestParam String name, @RequestParam int age){
//        log.info("Server Api Controller get name = {}, age = {}", name, age);
//
//        List<UserDto.CarDto> cars = Arrays.asList(
//                UserDto.CarDto.builder().name("BMW-1").carNum("B-1").isOwner(true).build(),
//                UserDto.CarDto.builder().name("BMW-2").carNum("B-2").isOwner(false).build(),
//                UserDto.CarDto.builder().name("BMW-3").carNum("B-3").isOwner(true).build()
//        );
//
//        var userDto = UserDto.builder().name(name).age(age).cars(cars).build();
//
//        return userDto;
//    }

//    @PostMapping(path = "/user/{id}/pw/{pw}")
//    public UserDto post(@PathVariable String id, @PathVariable String pw, @RequestParam String name, @RequestParam int age, @RequestBody UserDto userDto){
//        log.info("user info = {}", userDto);
//        userDto.setName("changed name");
//
//        return userDto;
//    }

    @PostMapping(path = "/user/{id}/pw/{pw}")
    public ResponseEntity post(@PathVariable String id, @PathVariable String pw, @RequestParam String name, @RequestParam int age, @RequestHeader(value = "x-auth") String xAuth, @RequestHeader(value = "use-term") String use, @RequestBody UserDto userDto){
        log.info("user info = {}", userDto);
        log.info("header info x-auth={}, use-term={}", xAuth, use);
        userDto.setName("changed name");

        HttpHeaders headers = new HttpHeaders();
        headers.add("x-auth", "univ");

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .headers(headers)
                .body(userDto);
    }
}
