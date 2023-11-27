package com.example.bookcafe.entity;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor

@Getter
@Setter
@Builder
@ToString

@Slf4j
@Table(name = "user_t")
@EntityListeners(value = {UserEntityListener.class, HistoryListener.class})
@Entity
public class UserEntity implements IDateMaker{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //mysql ai
    private Long idx;

    @Column(length = 20, nullable = false)
    private String name;
    @Column(length = 155, nullable = false)
    private String email;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<UserHistoryEntity> histories = new ArrayList<>();


}
