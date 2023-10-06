package com.example.client.repository;

import com.example.client.entity.MyLikeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyLikeRepository extends JpaRepository<MyLikeEntity, Long> {

}
