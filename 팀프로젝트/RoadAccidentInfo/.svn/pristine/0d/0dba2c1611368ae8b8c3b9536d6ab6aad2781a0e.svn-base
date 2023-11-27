package com.localhost.roadaccidentinfo.Repository;

import com.localhost.roadaccidentinfo.Entity.AreaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AreaRepository extends JpaRepository<AreaEntity, Long> {
    public AreaEntity findByAreaName(String param);

    public List<AreaEntity> findByAreaNameContains(String addr);

    public AreaEntity findByIdx(Long idx);

}
