package kr.co.edu.menu.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.servlet.ModelAndView;
import spring.config.RootContextConfig;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface MenuDAO {

    public int menuInsert(HashMap<String, Object> param);
    public int menuDelete(int product_index);

    public List<HashMap<String, Object>> menuSelectList();

    public List<HashMap<String, Object>> menuSearch(@Param("keyword") String keyword, @Param("option") String option);

    public int menuUpdate(HashMap<String, Object> param);
}
