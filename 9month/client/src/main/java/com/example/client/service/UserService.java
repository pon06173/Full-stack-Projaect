package com.example.client.service;

import com.example.client.dto.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {

    private final RestTemplate restTemplate;

    //server open api (rest)

    //http method: get
    //http://localhost:9999/apis/server?name=kim&age=1
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

    public UserDto getForObj(String name, int age){
        URI uri = UriComponentsBuilder.fromUriString("http://localhost:9090")
                .path("/apis/server")
                .queryParam("name", name)
                .queryParam("age", age)
                .encode()
                .build()
                .toUri();
        log.info("getForObj uri={}", uri.toString());

        UserDto res = restTemplate.getForObject(uri, UserDto.class);
        log.info("response DTO = {}", res);

        return res;
    }

    // uri
    // /apis/server/user/{id}/pw/{pw}?name=kim&age=1
    // method : post
    // data body :
    /*
     {
       "name":"kim",
       "age":1
     }
    * */

    public UserDto postForObj(String name, int age){
        URI uri = UriComponentsBuilder.fromUriString("http://localhost:9090")
                .path("/apis/server/user/{id}/pw/{pw}")
                .queryParam("name", name)
                .queryParam("age", age)
                .encode()
                .build()
                .expand("cool", "1234")
                .toUri();

        var user = UserDto.builder().name(name).age(age).build();

        return restTemplate.postForObject(uri, user, UserDto.class);
    }

    public UserDto exchange(String name, int age){
        URI uri = UriComponentsBuilder.fromUriString("http://localhost:9090")
                .path("/apis/server/user/{id}/pw/{pw}")
                .queryParam("name", name)
                .queryParam("age", age)
                .encode()
                .build()
                .expand("cool", "1234")
                .toUri();

        var user = UserDto.builder().name(name).age(age).build();
        var reqEntity = RequestEntity.post(uri).contentType(MediaType.APPLICATION_JSON)
                .header("x-auth", "daegu")
                .header("use-term", "keep")
                .body(user);

        var resEntity = restTemplate.exchange(reqEntity, UserDto.class);
        log.info("server status code = {}", resEntity.getStatusCode());
        log.info("server header info = {}", resEntity.getHeaders());
        log.info("server response body = {}", resEntity.getBody());

        return reqEntity.getBody();
    }
}
