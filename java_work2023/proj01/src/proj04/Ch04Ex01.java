package proj04;

import java.util.Arrays;
import java.util.Scanner;

class Phone {
   private String name;
   private String phone;
   
   public Phone() {
      // Default Constructor
   }
   
   // ������ �����ε�
public Phone(String name, String phone) {
	//super(); ��� ���� �����ϱ� �θ��� ������ ȣ���� ���� �ؾ���.
	this.name = name;
	this.phone = phone;
}

// setters/getters
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

@Override//phone�� ���� return
public String toString() {
	return "[name=" + name + ", phone=" + phone + "]";
}
   
   
   
}

public class Ch04Ex01 {
	//��ȭ��ȣ 10���� phoneArr�� �����ϰ�
	//�迭�� ��ƴٸ� ArrayList�� ����ص� �˴ϴ�.
	//�Է�, ���, �˻�, ����, ���� �ǵ��� �����ϼ���.
	
   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
      Phone[] phoneArr = new Phone[2];
      
      for(int i=0; i<phoneArr.length; i++) {
          System.out.print("�̸� �Է�: ");
          String name = scan.next();
          System.out.print("��ȭ ��ȣ �Է�");
          String phone = scan.next();
          Phone person = new Phone(name, phone);
          phoneArr[i] = person;
       }
      
      System.out.println(Arrays.toString(phoneArr));
      
      
      System.out.print("������ �̸��� �Է��ϼ���: ");
      String searchName = scan.next();
      
      for (int i = 0; i < phoneArr.length; i++) {
         if (phoneArr[i].getName().equals(searchName)) {
            System.out.print("���ο� ��ȭ ��ȣ �Է�: ");
            String newPhone = scan.next();
            phoneArr[i].setPhone(newPhone);
            System.out.println("��ȭ ��ȣ�� �����Ǿ����ϴ�.");
            break;
         }
      }
      
      System.out.println(Arrays.toString(phoneArr));
   }
}