package com.example.cafe.entity;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor

@Table(name = "user_history_t")
@Getter
@Setter
@Builder
@Entity
@ToString
@Slf4j
@Data
@EntityListeners(value = {UserEntityListener.class})
public class UserHistoryEntity implements IDateMaker{
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_t_idx")
    private UserEntity user;
}