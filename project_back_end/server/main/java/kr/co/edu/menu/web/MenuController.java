package kr.co.edu.menu.web;

import kr.co.edu.menu.service.MenuService;
import kr.co.edu.menu.service.impl.MenuServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private MenuService menuService;

    @RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView main () {
        ModelAndView mav = new ModelAndView("jsonView");
        HashMap<String, Object> result = new HashMap<>();
        result.put("testNumber", 1);
        result.put("testString", "문자열");
        mav.addObject(result);
        return mav;
    }

    //검색
    @RequestMapping(value = "/menuSearch.zz", method = RequestMethod.GET)
    public ModelAndView menuSearch(@RequestParam(value = "keyword") String keyword, @RequestParam(value = "option") String option) {
        System.out.println("dataSearch Controller" + option + keyword);
        ModelAndView mav = new ModelAndView("jsonView");
        List<HashMap<String, Object>> results = menuService.menuSearch(option, keyword);
        mav.addObject("result", results);
        return mav;
    }


    //삽입
    @RequestMapping(value = "/menuInsert.zz", method = {RequestMethod.POST})
    public ModelAndView menuInsert(@RequestBody HashMap<String, Object> param) {
        ModelAndView mav = new ModelAndView("jsonView");
        // Vue.js에서 보낸 데이터를 사용하여 데이터베이스에 삽입 로직을 구현하세요.

        // 상품을 데이터베이스에 삽입하고 결과를 확인하세요.
        int insertCount = menuService.menuInsert(param); // 수정된 부분
        mav.addObject("result", insertCount);
        return mav;
    }


    //리스트
    @RequestMapping(value = "/menuSelectList.zz", method = RequestMethod.GET)
    public ModelAndView menuSelectList () {
        ModelAndView mav = new ModelAndView("jsonView");
        List<HashMap<String, Object>> menuList = menuService.menuSelectList();
        mav.addObject("result", menuList);
        return mav;
    }
    //수정
    @RequestMapping(value = "/menuUpdate.zz", method = RequestMethod.POST)
    public ModelAndView menuUpdate(@RequestBody HashMap<String, Object> param) {
        ModelAndView mav = new ModelAndView("jsonView");

        // Vue.js에서 보낸 데이터를 사용하여 데이터베이스 상의 상품을 수정하는 로직을 구현하세요.
        int updateCount = menuService.menuUpdate(param);

        mav.addObject("result", updateCount);
        return mav;
    }


    //삭제
    @RequestMapping(value = "/menuDelete.zz", method = RequestMethod.POST)
    public ModelAndView menuDelete(@RequestParam(value = "product_index") int product_index) {
        ModelAndView mav = new ModelAndView("jsonView");

        // 여기에서 상품 삭제 로직을 구현하고, 삭제 결과를 확인합니다.
        int deleteCount = menuService.menuDelete(product_index);

        mav.addObject("result", deleteCount);

        return mav;
    }


}
