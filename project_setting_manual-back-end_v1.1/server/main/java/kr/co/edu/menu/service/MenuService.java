package kr.co.edu.menu.service;

import java.util.HashMap;
import java.util.List;

public interface MenuService {

    //메뉴 등록 기능
    public int menuInsert (HashMap<String, Object> param);

    //메뉴 목록 조회 기능
    public List<HashMap<String, Object>> menuSelectList ();

    //메뉴 수정 기능
    public int menuUpdate (HashMap<String, Object> param);

    //메뉴 삭제 기능
    public int menuDelete (int product_index);

}
