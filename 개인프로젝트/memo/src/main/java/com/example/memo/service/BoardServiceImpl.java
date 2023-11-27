package com.example.memo.service;

import com.example.memo.dto.BoardDto;
import com.example.memo.entity.BoardEntity;
import com.example.memo.entity.UserEntity;
import com.example.memo.repository.BoardRepository;
import com.example.memo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

  private final UserRepository userRepository;
  private final BoardRepository boardRepository;

  // 새 게시물 등록
  @Override
  public Long register(BoardDto dto) {
    Long idx = null;
    Optional<UserEntity> optionalUserEntity = userRepository.findById(dto.getEmail());
    if (optionalUserEntity.isPresent()) {
      BoardEntity entity = dtoToEntity(dto);
      // User 주입
      UserEntity user = optionalUserEntity.get();
      entity.setUserEmail(user);
      entity = boardRepository.save(entity);
      idx = entity.getIdx();
    }
    return idx;
  }

  // 모든 게시물 목록 조회
//  @Override
//  public List<BoardDto> getList() {
//    List<BoardEntity> entityList = boardRepository.findAll();
//    List<BoardDto> boardDtoList = toList(entityList);
//    return boardDtoList;
//  }

  // 사용자 이메일에 해당하는 게시물 목록 조회
  @Override
  public List<BoardDto> findMemoByEmail(String email) {
    List<BoardDto> boardDtoList = null;
    Optional<List<BoardEntity>> optionalBoardEntityList = boardRepository.findMemoByEmail(email);
    if (optionalBoardEntityList.isPresent()) {
      List<BoardEntity> boardEntityList = optionalBoardEntityList.get();
      if (boardEntityList.size() > 0)
        boardDtoList = toList((boardEntityList));
    }
    return boardDtoList;
  }

  // 게시물 삭제
  @Override
  public int remove(Long id) {
    int result = 0;
    try {
      boardRepository.deleteById(id);
      result = 1;
    } catch (Exception e) {
      e.printStackTrace();
    }
    return result;
  }
}
