package com.example.demo.model;

import java.util.Objects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
//@Data
public class TodoDTO {
   private int seq;
   private String title;
   private boolean done;
   
   @Override
   public int hashCode() {
      return Objects.hash(seq);
   }
   
   @Override
   public boolean equals(Object obj) {
      if (this == obj)
         return true;
      if (obj == null)
         return false;
      if (getClass() != obj.getClass())
         return false;
      TodoDTO other = (TodoDTO) obj;
      return seq == other.seq;
   }
}