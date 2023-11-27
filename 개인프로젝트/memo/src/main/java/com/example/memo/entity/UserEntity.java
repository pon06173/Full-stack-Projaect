package com.example.memo.entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = "boardList")
@Table(name = "user_t")
public class UserEntity extends baseEntity{
        @Id
        private String email;
        private String name;
        private String pw;

        @Builder.Default
        @OneToMany(mappedBy= "userEmail", cascade = CascadeType.ALL)
        private List<BoardEntity> boardList = new ArrayList<>();
    }