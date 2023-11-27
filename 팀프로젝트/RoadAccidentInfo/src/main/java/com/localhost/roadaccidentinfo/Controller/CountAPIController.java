package com.localhost.roadaccidentinfo.Controller;


import com.localhost.roadaccidentinfo.DTO.CountCityDTO;
import com.localhost.roadaccidentinfo.DTO.CountDTO;
import com.localhost.roadaccidentinfo.Service.CountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/apis/count")
public class CountAPIController {

    private final CountService countService;

    @GetMapping(path = "/sum_accident.do")
    public CountDTO sumAccident() {
        return countService.countAllAccident();
    }

    @GetMapping(path = "/year_accident.do")
    public CountDTO sumAccidentByYear(@RequestParam Integer param) {
        return countService.countAccidentByYear(param);
    }

    @GetMapping(path = "/year_and_type_accident.do")
    public CountDTO sumAccidentByYearAndType(@RequestParam Integer year, Long type) {
        return countService.countAccidentByYearAndType(year, type);
    }

    @GetMapping(path = "/year_and_type_accident_and_area.do")
    public CountDTO sumAccidentByYearAndType(@RequestParam Integer year, Long type, String area) {
        return countService.countAccidentByYearAndTypeAndArea(year, type, area);
    }

    //여기 이름 수정해 주세요 (매핑 이름, 함수 이름)
    @GetMapping(path = "/all_count.do")
    public List<CountDTO> sumAccidentAllYear() {
        return countService.findAllYearList();
    }

    @GetMapping(path = "/all_count_city.do")
    public List<CountCityDTO> findAllCitiesCount() { return countService.findAllCitiesCount(); }

}
