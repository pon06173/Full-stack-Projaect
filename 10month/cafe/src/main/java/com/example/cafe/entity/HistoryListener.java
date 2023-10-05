package com.example.cafe.entity;

import com.example.cafe.repository.UserHistoryRepository;
import com.example.cafe.support.BeansUtils;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

@Slf4j
public class HistoryListener {

    @PostPersist
    @PostUpdate
    public void persistAndUpdate(Object o) {
        log.info("HistoryListener persistence in ---");
        if(o instanceof UserEntity){
            //history를 저장해야한다.
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
