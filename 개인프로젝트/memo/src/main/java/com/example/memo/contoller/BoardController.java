package com.example.memo.contoller;

import com.example.memo.dto.BoardDto;
import com.example.memo.dto.UserDto;
import com.example.memo.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Controller
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    //신규생성 화면
    @GetMapping("/write")
    public String write(@SessionAttribute(name = "user", required = false) UserDto user){
        log.info("write");
        if(user==null){
            return "redirect:/login";
        }
        return "/list";
    }

    @PostMapping("/write")
    public String doWrite(BoardDto dto, RedirectAttributes redirectAttributes,
                          @SessionAttribute(name = "user", required = false) UserDto userDto) {
        log.info("doWrite dto:" + dto);
        if (userDto == null) {
            log.info("UserDto is NULL");
            return "redirect:/login";
        }
        dto.setEmail(userDto.getEmail());

        //게시판 글 저장
        Long idx = boardService.register(dto);
        if(idx!=null && idx>0L){
            redirectAttributes.addFlashAttribute("msg", "등록 되었습니다");
        }
        return "redirect:/list";
    }

//     게시판 목록 화면
    @GetMapping("/list")
    public String list(Model model, @SessionAttribute(name = "user", required = false) UserDto userDto) {

        if (userDto == null) {
            log.info("UserDto is NULL");
            return "redirect:/login";
        }
//        List<BoardDto> boardList = boardService.getList();
        List<BoardDto> boardList = boardService.findMemoByEmail(userDto.getEmail());
        model.addAttribute("boardList", boardList);
        return "/list";
    }


    //삭제
    @PostMapping("/remove")
    @ResponseBody
    public ResponseEntity<Object> remove(@RequestBody Map<String, Object> map){
        log.info("remove map:{}", map);
        int tempId = (int) map.get("idx");
        Long id = Long.valueOf(tempId);
        if(id==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("삭제를 하지 못했습니다.");
        }

        int result = boardService.remove(id);
        HashMap res = new HashMap();
        res.put("result", result);
        if(result>0){
            res.put("msg", "삭제가 되었습니다.");
        }else{
            res.put("msg", "삭제를 하지 못했습니다.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(res);
    }
}
