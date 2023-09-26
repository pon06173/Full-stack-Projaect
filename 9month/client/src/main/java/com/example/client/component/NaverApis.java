package com.example.client.component;

import com.example.client.dto.Naver.ReqImageDto;
import com.example.client.dto.Naver.ReqLocalDto;
import com.example.client.dto.Naver.ResImageDto;
import com.example.client.dto.Naver.ResLocalDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RequiredArgsConstructor
@Component
public class NaverApis {

    private final RestTemplate restTemplate;

    @Value("${naver.uri.local}")
    private String localSearchUri;
    @Value("${naver.uri.image}")
    private String imageSearchUri;
    @Value("${naver.id}")
    private String id;
    @Value("${naver.secret}")
    private String secret;

    public ResLocalDto searchLocal(ReqLocalDto reqLocalDto) {
        var uri = UriComponentsBuilder.fromUriString(localSearchUri)
                .queryParams(reqLocalDto.params())
                .build()
                .encode()
                .toUri();

        var headers = new HttpHeaders();
        headers.set("X-Naver-Client-Id", id);
        headers.set("X-Naver-Client-Secret", secret);


        var reqEntity = RequestEntity.get(uri)
                .headers(headers)
                .build();


        var resEntity = restTemplate.exchange(reqEntity, ResLocalDto.class);

        return resEntity.getBody();
    }

    public ResImageDto searchImage(ReqImageDto reqImageDto) {
        var uri = UriComponentsBuilder.fromUriString(imageSearchUri)
                .queryParams(reqImageDto.params())
                .build()
                .encode()
                .toUri();

        var headers = new HttpHeaders();
        headers.set("X-Naver-Client-Id", id);
        headers.set("X-Naver-Client-Secret", secret);


        var reqEntity = RequestEntity.get(uri)
                .headers(headers)
                .build();


        var resEntity = restTemplate.exchange(reqEntity, ResImageDto.class);

        return resEntity.getBody();
    }
}
