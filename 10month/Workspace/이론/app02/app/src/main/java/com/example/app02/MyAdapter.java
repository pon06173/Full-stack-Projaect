package com.example.app02;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

// <MyAdapter.MyViewHolder> - MyAdapter의 내부 클래스 참조
public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {
    // RecyclerView에 표시될 데이터 리스트
    private List<String> itemList;

    public MyAdapter(List<String> itemList) {
        // 생성자에서는 itemList를 초기화
        // MyAdapter 객체 생성 시 데이터 목록 인자 전달 받음.
        this.itemList = itemList;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        //  메서드는 새로운 뷰 홀더 객체를 생성
        // LayoutInflater를 사용하여 item_layout.xml 레이아웃을 올립니다.
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_layout, parent, false);
        // 인플레이트된 뷰를 이용하여 MyViewHolder 객체를 생성하고 반환
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        // 뷰 홀더에 데이터를 바인딩
        // itemList에서 해당 포지션의 아이템을 가져와 MyViewHolder의 itemText에 설정.
        String item = itemList.get(position);
        holder.itemText.setText(item);
    }

    @Override
    public int getItemCount() {
        // RecyclerView에 표시될 아이템의 총 개수를 반환.
        return itemList.size();
    }

    // 외부에 있던 MyViewHolder를 편의상 내부 클래스로 선언.
    public class MyViewHolder extends RecyclerView.ViewHolder {
        public TextView itemText;

        public MyViewHolder(View view) {
            super(view);
            itemText = view.findViewById(R.id.item_text);

            // 아이템을 클릭하면 반응하는 이벤트 핸들러
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    int position = getAdapterPosition();
                    if (position != RecyclerView.NO_POSITION) {
                        String clickedItem = itemList.get(position);
                        Toast.makeText(v.getContext(), "Clicked: " + clickedItem, Toast.LENGTH_SHORT).show();
                    }
                }
            });

            // 아이템을 길게 누르면 반응하는 이벤트 핸들러
            itemView.setOnLongClickListener(new View.OnLongClickListener() {
                @Override
                public boolean onLongClick(View v) {
                    int position = getAdapterPosition();
                    if (position != RecyclerView.NO_POSITION) {
                        String longClickedItem = itemList.get(position);
                        Toast.makeText(v.getContext(), "Long Clicked: " + longClickedItem, Toast.LENGTH_SHORT).show();
                        return true;
                    }
                    return false;
                }
            });
        }
    } // End of MyViewHolder

    // 아이템 등록
    public void addItem(String newItem) {
        itemList.add(newItem);
        // 리스트에 새 요소가 추가 된것을 Adapter에  통보한다.
        notifyItemInserted(itemList.size() - 1);
    }

    // 아이템 삭제
    public void removeItem(int position) {
        itemList.remove(position);
        // 리스트에서 요소가 제거 된 것을 Adapter에 통보한다.
        notifyItemRemoved(position);
    }
}

