package com.example.cafe.entity;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor

@Table(name = "user_t")
@Getter
@Setter
@Builder
@Entity
@ToString
@Slf4j
@Data
@EntityListeners(value = {UserEntityListener.class, UserHistoryEntity.class})
public class UserEntity implements IDateMaker {
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
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<UserHistoryEntity> histories = new ArrayList<>();
}
