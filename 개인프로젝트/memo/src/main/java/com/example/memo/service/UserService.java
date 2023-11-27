package com.example.memo.service;

import com.example.memo.dto.UserDto;
import com.example.memo.entity.UserEntity;

import java.util.List;
import java.util.stream.Collectors;

public interface UserService {
  // 회원 가입
  String register(UserDto dto);

  // 로그인
  UserDto login(UserDto dto);

  // Dto -> entity
  default UserEntity dtoToEntity(UserDto dto) {
    return UserEntity.builder()
            .email(dto.getEmail())
            .name(dto.getName())
            .pw(dto.getPw())
            .build();
  }

  //entity => dto 변환
  default UserDto entityToDto(UserEntity entity) {
    return UserDto.builder()
            .email(entity.getEmail())
            .name(entity.getName())
            .build();
  }

  //entity리스트 => dto리스트 변환
  default List<UserDto> toList(List<UserEntity> list){
    return list.stream().map(this::entityToDto).collect(Collectors.toList());
  }
}
