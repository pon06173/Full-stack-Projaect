package org.comstudy.myapp;

public class Phone {
   private int no;
   private String name;
   private String phone;
   
   // ������ �޼����� �̸��� Ŭ���� �̸��� ����
   // ��ȯ���� �ʰ� ��ȯŸ��(����Ÿ��)�� ����.
   // �����ڰ� �ϴ� ���� ��ü ���� �� ����ʵ� �ʱ�ȭ
   // ��ü ���� �Ҷ� new �ڿ� ���ȴ�.
   public Phone() {
      // �����ڿ��� �ٸ� ����� ������ ȣ��
      // �Ű������� Ÿ�԰� ������ �ݵ�� ��ġ ���Ѿ� �Ѵ�.
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
   
   // equals��  hashCode�� ������ �ؾ� indexOf(Object) ��� �����ϴ�.
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