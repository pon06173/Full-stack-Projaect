package com.localhost.roadaccidentinfo.Repository;

import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Entity.AccidentTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccidentTypeRepository extends JpaRepository<AccidentTypeEntity, Long> {
    public AccidentTypeEntity findByAccidentTypeName(String accidentTypeName);

    public AccidentTypeEntity findByIdx(Long idx);
}
