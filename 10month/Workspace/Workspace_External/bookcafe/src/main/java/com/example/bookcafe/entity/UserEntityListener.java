package com.example.bookcafe.entity;

import lombok.extern.slf4j.Slf4j;

import javax.persistence.PostPersist;
import javax.persistence.PostUpdate;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;

@Slf4j
public class UserEntityListener {
    @PrePersist
    public void prePersist(Object o){
        log.info("prePersist in ----");
        if(o instanceof IDateMaker) {
            ((IDateMaker)o).setCreatedAt(LocalDateTime.now());
            ((IDateMaker)o).setUpdatedAt(LocalDateTime.now());
        }
    }
    @PostPersist
    public void postPersist(Object o){
        log.info("postPersist in ----");

    }
    @PreUpdate
    public void preUpdate(Object o){
        log.info("preUpdate in ----");
        if(o instanceof IDateMaker) {
            ((IDateMaker)o).setUpdatedAt(LocalDateTime.now());
        }

//        this.updatedAt = LocalDateTime.now();

    }
    @PostUpdate
    public void postUpdate(Object o){
        log.info("postUpdate in ----");

    }
}
