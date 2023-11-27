package com.example.memo.service;

import com.example.memo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.memo.dto.UserDto;
import com.example.memo.entity.UserEntity;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  // 회원 가입 처리
  @Override
  public String register(UserDto dto) {
    // 이메일 중복 확인
    if (userRepository.findById(dto.getEmail()).isPresent()) {
      return null;
    }
    // 새로운 사용자 등록
    UserEntity user = dtoToEntity(dto);
    user = userRepository.save(user);
    return user.getEmail();
  }

  // 로그인 처리
  @Override
  public UserDto login(UserDto dto) {
    UserDto userDto = null;
    Optional<UserEntity> optionalUserEntity = userRepository.findByEmailAndPw(dto.getEmail(), dto.getPw());
    if (optionalUserEntity.isPresent()) {
      userDto = entityToDto(optionalUserEntity.get());
    }
    return userDto;
  }


}


