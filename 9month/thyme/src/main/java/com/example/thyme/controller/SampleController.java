package com.example.thyme.controller;

import com.example.thyme.dto.SampleDto;
import com.example.thyme.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.text.Collator;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RequestMapping(path = "/sample")
@Controller
@Slf4j
public class SampleController {

//    @GetMapping("/ex1")
//    public void  ex1() {
//        log.info("controller ex1 in...");
//    }

    @GetMapping("/ex1")
    public String ex1() {
        log.info("controller ex1 in....");
        return "/sample/ex1.html";
    }

    @GetMapping("/ex2")
    public void exModel(Model model) {
        List<SampleDto> samples = IntStream.rangeClosed(1,20)
                .asLongStream().mapToObj(i->{
                    SampleDto dto = SampleDto.builder()
                            .sno(i)
                            .first("first="+i)
                            .last("last="+i)
                            .regTime(LocalDateTime.now())
                            .build();
                    return dto;
                }).collect(Collectors.toList());

        model.addAttribute("samples", samples);
    }

    @GetMapping(path = "/exRe")
    public String exRedirect(Model model, RedirectAttributes redirectAttributes) {
        var dto = SampleDto.builder()
                .sno(100L)
                .first("first="+100)
                .last("last="+100)
                .regTime(LocalDateTime.now())
                .build();
        redirectAttributes.addFlashAttribute("result", "fail");
        redirectAttributes.addFlashAttribute("sample", dto);
        return "redirect:/sample/ex3";
    }

    @GetMapping("/ex3")
    public void ex3(){

    }

    @GetMapping("/exlink")
    public void exLink(Model model) {
        List<SampleDto> samples = IntStream.rangeClosed(1,5)
                .asLongStream().mapToObj(i->{
                    SampleDto dto = SampleDto.builder()
                            .sno(i)
                            .first("first="+i)
                            .last("last="+i)
                            .regTime(LocalDateTime.now())
                            .build();
                    return dto;
                }).collect(Collectors.toList());

        model.addAttribute("samples", samples);
    }


    @GetMapping("/exview")
    public void exview(@RequestParam Long sno, Model model) {
        model.addAttribute("sno", sno);
    }

    @GetMapping("/exform")
    public void exform() {

    }

    @PostMapping("/exlogin")
    public void exlogin(UserDto userDto, Model model) {
        log.info("user info = {}", userDto);
        model.addAttribute("userInfo", userDto);

    }


}