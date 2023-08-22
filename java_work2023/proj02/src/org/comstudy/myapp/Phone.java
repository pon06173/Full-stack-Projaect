package org.comstudy.myapp;

public class Phone {
   private int no;
   private String name;
   private String phone;
   
   // 생성자 메서드의 이름은 클래스 이름과 같다
   // 반환하지 않고 반환타입(리턴타입)도 없다.
   // 생성자가 하는 일은 객체 생성 시 멤버필드 초기화
   // 객체 생성 할때 new 뒤에 사용된다.
   public Phone() {
      // 생성자에서 다른 멤버인 생성자 호출
      // 매개변수의 타입과 갯수를 반드시 일치 시켜야 한다.
      this(0,"","");
   }

   public Phone(int no, String name, String phone) {
      //super();
      this.no = no;
      this.name = name;
      this.phone = phone;
   }

   public Phone(String modifyName) {
      this.name = modifyName;
   }
   
   // equals와  hashCode를 재정의 해야 indexOf(Object) 사용 가능하다.
   @Override
   public int hashCode() {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((name == null) ? 0 : name.hashCode());
      return result;
   }

   @Override
   public boolean equals(Object obj) {
      if (this == obj)
         return true;
      if (obj == null)
         return false;
      if (getClass() != obj.getClass())
         return false;
      Phone other = (Phone) obj;
      if (name == null) {
         if (other.name != null)
            return false;
      } else if (!name.equals(other.name))
         return false;
      return true;
   }

   public void setNo(int no) {
      this.no = no;
   }

   public int getNo() {
      return no;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getPhone() {
      return phone;
   }

   public void setPhone(String phone) {
      this.phone = phone;
   }

   @Override
   public String toString() {
      return String.format("%d\t%s\t%s", no, name, phone);
   }
   
   
}