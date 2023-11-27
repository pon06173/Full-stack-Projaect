package com.example.memo.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "userEmail")
@Table(name = "board_t")//데이터베이스 테이블 "board_t"와 매핑
public class BoardEntity extends baseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx; // 테이블과 일치시키기 위해 idx로 변경

    private String title;

    @Column(length = 500) // content의 길이를 500으로 변경
    private String content;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_email")
    private UserEntity userEmail;
}
//BoardEntity 클래스는 데이터베이스와 상호 작용하는 JPA 엔티티로 사용됩니다