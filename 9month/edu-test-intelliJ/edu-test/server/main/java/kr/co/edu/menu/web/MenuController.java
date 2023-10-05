package kr.co.edu.menu.web;

import kr.co.edu.menu.service.MenuService;
import kr.co.edu.menu.service.impl.MenuServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MenuController {

    @Autowired
    private MenuServiceImpl menuService;

    @RequestMapping(value = "/menuInsert.request", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView menuInsert () {
        ModelAndView mav = new ModelAndView("jsonView");
        //menuService.menuInsert();
        return mav;
    }
}
