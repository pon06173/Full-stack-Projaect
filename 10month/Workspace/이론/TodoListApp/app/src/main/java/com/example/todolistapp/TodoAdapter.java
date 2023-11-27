package com.example.todolistapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.todolistapp.TodoItem;

import java.util.ArrayList;

public class TodoAdapter extends RecyclerView.Adapter<TodoAdapter.TodoViewHolder> {
    private ArrayList<TodoItem> todoList;

    public TodoAdapter(ArrayList<TodoItem> todoList) {
        this.todoList = todoList;
    }

    @NonNull
    @Override
    public TodoViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.todo_item, parent, false);
        return new TodoViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull TodoViewHolder holder, int position) {
        TodoItem currentItem = todoList.get(position);
        holder.textViewTodoItem.setText(currentItem.getContent());
    }

    @Override
    public int getItemCount() {
        return todoList.size();
    }

    public class TodoViewHolder extends RecyclerView.ViewHolder {
        TextView textViewTodoItem;

        public TodoViewHolder(@NonNull View itemView) {
            super(itemView);
            textViewTodoItem = itemView.findViewById(R.id.textViewTodoItem);

            itemView.setOnLongClickListener(new View.OnLongClickListener() {
                @Override
                public boolean onLongClick(View v) {
                    int position = getAdapterPosition();
                    if (position != RecyclerView.NO_POSITION) {
                        todoList.remove(position);
                        notifyDataSetChanged();
                        return true;
                    }
                    return false;
                }
            });
        }
    }
}