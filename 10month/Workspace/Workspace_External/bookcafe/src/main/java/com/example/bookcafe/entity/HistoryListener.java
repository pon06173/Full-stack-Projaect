package com.example.bookcafe.entity;

import com.example.bookcafe.repository.UserHistoryRepository;
import com.example.bookcafe.support.BeansUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.PostPersist;
import javax.persistence.PostUpdate;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;

@Slf4j
public class HistoryListener {

    @PostPersist
    @PostUpdate
    public void persistAndUpdate(Object o){
        log.info("HistoryListener persistAndUpdate in ----");
        if(o instanceof UserEntity) {
          //history를 저장해야 한다.
           var historyRepository =
                   BeansUtils.getBean(UserHistoryRepository.class);

           var historyEntity = UserHistoryEntity.builder()
                   .name(((UserEntity) o).getName())
                   .email(((UserEntity) o).getEmail())
                   .user(((UserEntity) o))
                   .build();
           historyRepository.save(historyEntity);
        }
    }

}
