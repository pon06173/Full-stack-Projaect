package com.example.client.service;

import ch.qos.logback.classic.Logger;
import com.example.client.dto.MyFoodDto;
import com.example.client.dto.Naver.ReqImageDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.example.client.component.NaverApis;
import com.example.client.dto.Naver.ReqLocalDto;

@RequiredArgsConstructor
@Service
public class MyFoodService {

    private final NaverApis naverApis;

    private static final Logger log = (Logger) LoggerFactory.getLogger(MyFoodService.class);

    public MyFoodDto search(String query) {
        var localReq = ReqLocalDto.builder()
                .query(query).build();

        var localRes = naverApis.searchLocal(localReq);
        var localItem = localRes.getItems().get(0);
        var title = localItem.getTitle();
        title = title.strip().replaceAll("<[^>]*>","");

        var imageReq = ReqImageDto.builder()
                .query(title).build();
        var imageRes = naverApis.searchImage(imageReq);
        var imageItem = imageRes.getItems().get(0);

        return MyFoodDto.builder()
                .imgUrl(imageItem.getLink())
                .title(title)
                .addr(localItem.getAddress())
                .roadAddr(localItem.getRoadAddress())
                .homepage(localItem.getLink())
                .category(localItem.getCategory())
                .build();


        // log.info("local search res dto = {}", resLocal);
        // var imageReq = ReqImageDto.builder()
        //                 .query(query).build();
        // var resImage = naverApis.searchImage(imageReq);
        // log.info("image search res dto = {}", resImage);
    }
}
