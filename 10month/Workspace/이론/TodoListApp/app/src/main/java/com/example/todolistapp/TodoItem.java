package com.example.todolistapp;

public class TodoItem {
    // Todo 항목의 내용을 저장할 String 타입의 필드
    private String content;

    // 생성자: TodoItem 객체를 생성할 때 필요한 내용을 초기화합니다.
    public TodoItem(String content) {
        this.content = content;
    }

    // Getter 메서드: Todo 항목의 내용을 반환합니다.
    public String getContent() {
        return content;
    }

    // (선택적) Setter 메서드: Todo 항목의 내용을 수정합니다.
    public void setContent(String content) {
        this.content = content;
    }
}
