package com.localhost.roadaccidentinfo.Controller;

import com.localhost.roadaccidentinfo.Service.AccidentService;
import com.localhost.roadaccidentinfo.Service.AccidentTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
@RequestMapping(path = "")
public class RoadAccidentInfoController {
    private final AccidentTypeService accidentTypeService;
    private final AccidentService accidentService;

    @GetMapping(path = "")
    public String root() { return "index"; }

    @GetMapping(path = "/error")
    public String error() { return "error"; }

}
