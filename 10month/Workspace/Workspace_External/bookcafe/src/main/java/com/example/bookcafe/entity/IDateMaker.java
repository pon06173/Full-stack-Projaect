package com.example.bookcafe.entity;

import java.time.LocalDateTime;

public interface IDateMaker {
    LocalDateTime getCreatedAt();
    LocalDateTime getUpdatedAt();
    void setCreatedAt(LocalDateTime createdAt);
    void setUpdatedAt(LocalDateTime updatedAt);
}
