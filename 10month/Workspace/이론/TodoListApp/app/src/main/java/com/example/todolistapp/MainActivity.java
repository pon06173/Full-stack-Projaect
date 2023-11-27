package com.example.todolistapp;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private EditText editTextTodo;
    private Button buttonAdd;
    private RecyclerView recyclerViewTodo;
    private ArrayList<TodoItem> todoList;
    private TodoAdapter todoAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize EditText, Button, and RecyclerView
        editTextTodo = findViewById(R.id.editTextTodo);
        buttonAdd = findViewById(R.id.buttonAdd);
        recyclerViewTodo = findViewById(R.id.recyclerView);

        // Initialize ArrayList and Adapter
        todoList = new ArrayList<>();
        todoAdapter = new TodoAdapter(todoList);

        // Set up RecyclerView
        recyclerViewTodo.setLayoutManager(new LinearLayoutManager(this));
        recyclerViewTodo.setAdapter(todoAdapter);

        // Set up Button click event
        buttonAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String todoContent = editTextTodo.getText().toString();
                if (!todoContent.isEmpty()) {
                    TodoItem newTodoItem = new TodoItem(todoContent);
                    todoList.add(newTodoItem);
                    todoAdapter.notifyDataSetChanged();
                    editTextTodo.setText("");
                }
            }
        });
    }
}