package com.example.memo.service;


import com.example.memo.entity.BoardEntity;
import com.example.memo.dto.BoardDto;


import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

public interface BoardService {
  // 게시물 등록
  Long register(BoardDto dto);

  // 모든 게시물 목록 조회
//   List<BoardDto> getList();

  // 사용자 이메일로 게시물 목록 조회
  List<BoardDto> findMemoByEmail(String email);

  //삭제
  int remove(Long idx);

  // Dto -> entity
  default BoardEntity dtoToEntity(BoardDto dto) {
    return BoardEntity.builder()
            .idx(dto.getIdx())
            .title(dto.getTitle())
            .content(dto.getContent())
            .build();
  }

  // entity -> Dto
  default BoardDto entityToDto(BoardEntity entity) {
    return BoardDto.builder()
            .idx((entity.getIdx()))
            .title(entity.getTitle())
            .content(entity.getContent())
            .Email(entity.getUserEmail().getEmail())
            .createAt(entity.getCreateAt().atTime(LocalTime.from(LocalDateTime.now())))
            .build();
  }

  //entity리스트 => dto리스트 변환
  default List<BoardDto>  toList(List<BoardEntity> list) {
    return list.stream().map(this::entityToDto).collect(Collectors.toList());
  }

}
