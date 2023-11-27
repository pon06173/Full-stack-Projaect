package com.example.memo.contoller;

import com.example.memo.dto.BoardDto;
import com.example.memo.dto.UserDto;
import com.example.memo.service.UserService;
import com.example.memo.service.UserServiceImpl;
import com.example.memo.service.BoardServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.time.LocalDateTime;

@Slf4j
@Controller
public class UserController {
  private final UserService userService;


  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/")
  public String shortlink() {
    log.info("단축 로그인 페이지");
    return "login";
  }


  @GetMapping("/login")
  public String login() {
    log.info("로그인 페이지");
    return "login";
  }

    //신규생성 화면
    @GetMapping("/signup")
    public String signup(){
        log.info("signup");
        return "/signup";
    }

    //신규저장
    @PostMapping("/signup")
    public String register(UserDto dto, RedirectAttributes redirectAttributes) {
      log.info("register dto: " + dto);
      String email = userService.register(dto); // Use the userService instance
      if (email != null && !email.isEmpty()) {
        redirectAttributes.addFlashAttribute("msg", "회원가입이 되었습니다");
      } else {
        redirectAttributes.addFlashAttribute("msg", "회원가입이 되었습니다");
      }
      return "redirect:/login";
    }


  // 로그인 처리
  @PostMapping("/login")
  public String doLogin(UserDto dto, RedirectAttributes redirectAttributes, HttpServletRequest request) {
    log.info("doLogin dto:" + dto);
    UserDto userDto = userService.login(dto);
    log.info("{}", userDto);
    if (userDto == null || userDto.getEmail() == null) {
      redirectAttributes.addFlashAttribute("msg", "로그인 실패");
      return "redirect:/login";
    }
    // 세션정보 저장
    HttpSession httpSession = request.getSession();
    httpSession.setAttribute("user", userDto);
    redirectAttributes.addFlashAttribute("msg", "로그인 성공");
    return "redirect:/list";
  }


  //로그아웃 처리
  @GetMapping("/logout")
  public String logout(HttpServletRequest request) {
    log.info("logout");

    HttpSession httpSession = request.getSession();
    httpSession.invalidate(); //세션정보 초기화

    return "redirect:/login";
  }


}
