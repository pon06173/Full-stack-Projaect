package com.example.cafe.entity;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Slf4j
public class UserEntityListener {
    @PrePersist
    public void prePersist(Object o) {
        log.info("prePersist in ---");

        if(o instanceof IDateMaker){
            ((IDateMaker)o).setCreatedAt(LocalDateTime.now());
            ((IDateMaker)o).setUpdatedAt(LocalDateTime.now());
        }

    }
    @PostPersist
    public void postPersist(Object o) {
        log.info("postPersist in ---");
    }

    @PreUpdate
    public void preUpdate(Object o) {
        log.info("preUpdate in ---");
//        this.updatedAt = LocalDateTime.now();
    }

    @PostUpdate
    public void postUpdate(Object o) {
        log.info("postUpdate in ---");
    }

    @PreRemove
    public void preRemove(Object o) {
        log.info("preRemove in ---");
    }

    @PostRemove
    public void postRemove(Object o) {
        log.info("postRemove in ---");
    }
}
