package proj04;

import java.util.ArrayList;
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

public class Ch04Ex02 {

	   public static void main(String[] args) {
	      Scanner scan = new Scanner(System.in);
	      ArrayList<Phone> phoneList = new ArrayList<>();
	      
	      while (true) {
	         System.out.println("1. �Է� / 2. ���� / 3. ���� / 4. ��� / 5. ����");
	         int choice = scan.nextInt();
	         
	         if (choice == 5) {
	            System.out.println("���α׷��� �����մϴ�.");
	            break;
	         }
	         
	         switch (choice) {
	            case 1:
	               System.out.print("�̸� �Է�: ");
	               String name = scan.next();
	               System.out.print("��ȭ ��ȣ �Է�: ");
	               String phone = scan.next();
	               Phone person = new Phone(name, phone);
	               phoneList.add(person);
	               break;
	            
	            case 2:
	               // Modify a phone record
	               System.out.print("������ �̸��� �Է��ϼ���: ");
	               String searchName = scan.next();
	               for (Phone p : phoneList) {
	                  if (p.getName().equals(searchName)) {
	                     System.out.print("���ο� ��ȭ ��ȣ �Է�: ");
	                     String newPhone = scan.next();
	                     p.setPhone(newPhone);
	                     System.out.println("��ȭ ��ȣ�� �����Ǿ����ϴ�.");
	                     break;
	                  }
	               }
	               break;
	            
	            case 3:
	               // Delete a phone record
	               System.out.print("������ �̸��� �Է��ϼ���: ");
	               String deleteName = scan.next();
	               Phone deletePerson = null;
	               for (Phone p : phoneList) {
	                  if (p.getName().equals(deleteName)) {
	                     deletePerson = p;
	                     break;
	                  }
	               }
	               if (deletePerson != null) {
	                  phoneList.remove(deletePerson);
	                  System.out.println("��ȭ ��ȣ�� �����Ǿ����ϴ�.");
	               } else {
	                  System.out.println("�ش��ϴ� �̸��� ��ȭ ��ȣ�� ã�� �� �����ϴ�.");
	               }
	               break;
	            
	            case 4:
	               System.out.println("��ȭ��ȣ ���:");
	               for (Phone p : phoneList) {
	                  System.out.println(p);
	               }
	               break;
	            
	            default:
	               System.out.println("�߸��� �����Դϴ�.");
	         }
	      }
	   }
	}
