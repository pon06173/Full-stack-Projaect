package com.example.client.service;

import com.example.client.dto.MyLikeDto;
import com.example.client.entity.MyLikeEntity;
import com.example.client.repository.MyLikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MyLikeService {
    private final MyLikeRepository myLikeRepository;

    public MyLikeDto add(MyLikeDto dto) {
        var entity = myLikeRepository.save(dtoToEntity(dto));
        return entityToDto(entity);
    }

    private MyLikeEntity dtoToEntity(MyLikeDto dto){
        return MyLikeEntity.builder().category(dto.getCategory())
                .homepage(dto.getHomepage())
                .roadAddr(dto.getRoadAddr())
                .title(dto.getTitle())
                .build();
    }

    private MyLikeDto entityToDto(MyLikeEntity dto){
        return MyLikeDto.builder().category(dto.getCategory())
                .homepage(dto.getHomepage())
                .roadAddr(dto.getRoadAddr())
                .title(dto.getTitle())
                .build();
    }
}
