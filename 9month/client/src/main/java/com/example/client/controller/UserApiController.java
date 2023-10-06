package com.example.client.controller;

import com.example.client.dto.MyFoodDto;
import com.example.client.dto.MyLikeDto;
import com.example.client.dto.UserDto;
import com.example.client.service.MyFoodService;
import com.example.client.service.MyLikeService;
import com.example.client.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RequestMapping(path = "/apis/user")
@RestController
public class UserApiController {

    //localhost:9999/apis/user?name=kim&age=1
    //get method
    private final UserService userService;
    private final MyFoodService footService;
    private final MyLikeService likeService;

    @GetMapping("/search")
    public MyFoodDto search(@RequestParam String query) {
        log.info("query str = {}", query);
        return footService.search(query);
    }

    @PostMapping("/add")
    public MyLikeDto add(@RequestBody MyLikeDto myLikeDto){
        log.info("mylike body = {}", myLikeDto);
        return likeService.add(myLikeDto);
    }

    @GetMapping(path = "")
    public UserDto get(@RequestParam String name, @RequestParam int age){
        log.info("Client Api Controller get name = {}, age = {}", name, age);
        //return userService.getForObj(name, age);
        return userService.exchange(name, age);
    }


//    @GetMapping(path = "")
//    public UserDto get(@RequestParam String name, @RequestParam int age){
//        log.info("Client Api Controller get name = {}, age = {}", name, age);
//        //return userService.getForObj(name, age);
//        return userService.postForObj(name, age);
//    }

//    @GetMapping(path = "")
//    public UserDto get(@RequestParam String name, @RequestParam int age){
//        log.info("Client Api Controller get name = {}, age = {}", name, age);
//        //return userService.getForObj(name, age);
//        return userService.getForObj(name, age);
//    }
}
