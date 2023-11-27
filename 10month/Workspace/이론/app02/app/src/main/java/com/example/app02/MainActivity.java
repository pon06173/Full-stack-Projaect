package com.example.app02;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    // RecyclerView의 설정과 데이터 바인딩을 관리.
    private RecyclerView recyclerView;
    // RecyclerView에 표시될 아이템 데이터와 뷰를 연결.
    private MyAdapter adapter;
    // RecyclerView에 표시될 아이템의 데이터가 저장.
    private List<String> itemList;
    // 아이템 등록/삭제 버튼
    private Button addBtn, removeBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // activity_main.xml 레이아웃 파일을 이 액티비티에 적용
        setContentView(R.layout.activity_main);

        // activity_main.xml에 정의한 RecyclerView
        recyclerView = findViewById(R.id.recyclerView);
        // activity_main.xml에 정의 한 아이템 등록/삭제 버튼
        addBtn = findViewById(R.id.addBtn);
        removeBtn = findViewById(R.id.removeBtn);

        // itemList 필드에 RecyclerView에 표시될 아이템 데이터를 초기화
        //itemList = Arrays.asList("Item 1", "Item 2", "Item 3", "Item 4");
        // 실제 ArrayList여야 아이템 등록이 될 수 있다.
        itemList = new ArrayList<>(Arrays.asList("Item 1", "Item 2", "Item 3", "Item 4"));

        // MyAdapter 생성자에 itemList를 전달하여 어댑터가 사용할 데이터를 설정
        adapter = new MyAdapter(itemList);
        // RecyclerView의 레이아웃을 선형으로 설정
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getApplicationContext());
        // setLayoutManager 메서드를 사용하여 RecyclerView에 레이아웃 매니저를 설정.
        recyclerView.setLayoutManager(layoutManager);
        // setAdapter 메서드를 사용하여 RecyclerView에 어댑터를 설정.
        // 이로써 RecyclerView는 itemList 데이터를 사용하여 아이템을 표시하게 됨.
        recyclerView.setAdapter(adapter);

        // 아이템 등록 버튼의 이벤트 핸들러
        addBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                adapter.addItem("New Item " + (itemList.size() + 1));
            }
        });

        // 아이템 삭제 버튼의 이벤트 핸들러
        removeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!itemList.isEmpty()) {
                    adapter.removeItem(0);
                }
            }
        });
    }
}