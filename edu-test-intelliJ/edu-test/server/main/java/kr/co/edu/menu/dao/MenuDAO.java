package kr.co.edu.menu.dao;

import org.apache.ibatis.annotations.Mapper;
import spring.config.RootContextConfig;

@Mapper
public interface MenuDAO {

    public void menuInsert();
}
