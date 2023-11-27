package com.localhost.roadaccidentinfo.Repository;

import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Transactional
@Repository
public interface AccidentRepository extends JpaRepository<AccidentEntity, Long> {

    public List<AccidentEntity> findByMapPlaceAddressContains(String addr);

    public AccidentEntity findByIdx(Long idx);

    public List<AccidentEntity> findByAccidentTypeIdx(Long idx);

    @Modifying
    @Query("UPDATE AccidentEntity a set a.accidentArea =:area where a.idx = :idx")
    void updateAccidentArea(String area, Long idx);

    @Query(value = "SELECT a FROM AccidentEntity a WHERE a.accidentArea LIKE %:area% AND a.accidentYear = :year AND a.accidentTypeIdx = :typeIdx")
    public List<AccidentEntity> findByAccidentYearAndAccidentTypeIdxAndArea(Integer year, Long typeIdx, String area);

    List<AccidentEntity> findByAccidentArea(String area);

    List<AccidentEntity> findByAccidentAreaContains(String area);

    List<AccidentEntity> findByMapPlaceAddress(String area);

    List<AccidentEntity> findByAccidentYear(Integer year);

    List<AccidentEntity> findByAccidentYearAndAccidentTypeIdx(Integer year, Long typeIdx);

    @Query(value = "SELECT *, (6371*acos(cos(radians(:latitude))*cos(radians(latitude))*cos(radians(longitude)" +
            "-radians(:longitude))+sin(radians(:latitude))*sin(radians(latitude)))) AS DISTANCE FROM accident_t HAVING DISTANCE <= 10 ORDER BY DISTANCE", nativeQuery = true)
    public List<AccidentEntity> findAccidentNear10KM(BigDecimal latitude, BigDecimal longitude);
}
