package com.example.hello.controller;

import com.example.hello.dto.UserInfoDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.Map;

//http://localhost:9090/apis
@RequestMapping(path = {"/apis"})
@RestController
@Slf4j
public class ApiController {
    @GetMapping(path= "/hello")
    public String hello(){
        log.info("hello api in...");
        return "hello spring boot!";
    }

    //get 방식으로 api 생성
    //http://localhost:9090/apis/name/{id}
    @GetMapping(path = "/name/{id}")
    public String pathVariable(@PathVariable(name = "id") String userId){
        log.info("pathVariable api in param = {}", userId);
        return "pathVariable param= " + userId;
    }

    //get 방식으로 api 생성
    //http://localhost:9090/apis/name/{id}/age/{code}
    @GetMapping(path = "/name/{id}/age/{code}")
    public String pathVariable(@PathVariable(name = "id") String userId, @PathVariable String code) {
        log.info("pathVariable api in params = {}, {}", userId, code);
        return "pathVariable params= " + userId + " and " + code;
    }

    //queryparam
    // /apis/get/query?id=1&pw=1234
    @GetMapping(path = "/get/query")
    public String paramsT(@RequestParam(name = "id") String userId,
                          @RequestParam String pw ){
        log.info("id={}, pw={}", userId,pw);
        return userId;
    }

    // /apis/get/query/map?id=1&pw=1234&name=kim&location=seoul
    // 키랑value 값이 많을때 하나씩 주지 말고 forEach 반복문을 사용해서 쉽게 Get 할 수 있다.
    @GetMapping("/get/query/map")
    public String paramsMap(@RequestParam Map<String, String> params) {
        var sb = new StringBuilder();
        //stream, lamda
        params.entrySet().forEach(e->{
            log.info("key={}, val={}",e.getKey(), e.getValue());
            if(e.getKey().equals("id")) {

            }
            sb.append(e.getKey()+"="+ e.getValue()+"\n");
        });
        return sb.toString();
    }

    @GetMapping("/get/query/obj")
    public String paramsMapObj(UserInfoDto infoDto) {
        log.info("dto info = {}", infoDto);
        return infoDto.toString();
    }
}
