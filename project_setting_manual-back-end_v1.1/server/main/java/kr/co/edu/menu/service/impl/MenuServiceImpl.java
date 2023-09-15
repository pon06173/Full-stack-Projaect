package kr.co.edu.menu.service.impl;

import kr.co.edu.menu.dao.MenuDAO;
import kr.co.edu.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuDAO menuDAO;

    @Override
    public int menuInsert(HashMap<String, Object> param) {
        // DAO를 사용하여 데이터베이스 작업을 수행하고 결과를 반환합니다.
        int insertCount = menuDAO.menuInsert(param);
        return insertCount;
    }

    @Override
    public List<HashMap<String, Object>> menuSelectList() {
        // DAO를 사용하여 데이터베이스에서 목록을 조회하고 반환합니다.
        return menuDAO.menuSelectList();
    }

    @Override
    public int menuUpdate(HashMap<String, Object> param) {
        // 필요한 경우 메뉴 업데이트 로직을 구현합니다.
        int updateCount = menuDAO.menuUpdate(param);
        return updateCount;
    }

    @Override
    public int menuDelete(int product_index) {
        // 필요한 경우 메뉴 삭제 로직을 구현합니다.
        int deleteCount = menuDAO.menuDelete(product_index);
        return deleteCount;
    }
}
