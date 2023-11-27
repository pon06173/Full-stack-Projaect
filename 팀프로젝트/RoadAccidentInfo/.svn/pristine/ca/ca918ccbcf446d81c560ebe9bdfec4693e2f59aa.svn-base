package com.localhost.roadaccidentinfo.Repository;

import com.localhost.roadaccidentinfo.DTO.MapPlaceDTO;
import com.localhost.roadaccidentinfo.Entity.AreaEntity;
import com.localhost.roadaccidentinfo.Entity.MapPlaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MapPlaceRepository extends JpaRepository<MapPlaceEntity, Long> {
    public MapPlaceEntity findByAreaIdx(Long idx);

    public List<MapPlaceEntity> findByAddressContains(String addr);

    public MapPlaceEntity findByIdx(Long idx);

    public List<MapPlaceEntity> findByAddress(String address);

}
