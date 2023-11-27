package kr.co.edu.menu.service.impl;

import kr.co.edu.menu.dao.MenuDAO;
import kr.co.edu.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MenuServiceImpl2 implements MenuService {

    @Autowired
    private MenuDAO menuDAO;

    @Override
    public int menuInsert (HashMap<String, Object> param) {
        HashMap<String, Object> data = new HashMap<>();
        int insertCount = menuDAO.menuInsert(param);
        return insertCount;
    }

    @Override
    public List<HashMap<String, Object>> menuSelectList() {
        return menuDAO.menuSelectList();
    }

    @Override
    public void menuUpdate() {

    }

    @Override
    public void menuDelete() {

    }

}
