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
   
   // 생성자 오버로딩
public Phone(String name, String phone) {
	//super(); 상속 받지 않으니깐 부모의 생성자 호출은 삭제 해야함.
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

@Override//phone의 내용 return
public String toString() {
	return "[name=" + name + ", phone=" + phone + "]";
}
   
   
   
}

public class Ch04Ex02 {

	   public static void main(String[] args) {
	      Scanner scan = new Scanner(System.in);
	      ArrayList<Phone> phoneList = new ArrayList<>();
	      
	      while (true) {
	         System.out.println("1. 입력 / 2. 수정 / 3. 삭제 / 4. 출력 / 5. 종료");
	         int choice = scan.nextInt();
	         
	         if (choice == 5) {
	            System.out.println("프로그램을 종료합니다.");
	            break;
	         }
	         
	         switch (choice) {
	            case 1:
	               System.out.print("이름 입력: ");
	               String name = scan.next();
	               System.out.print("전화 번호 입력: ");
	               String phone = scan.next();
	               Phone person = new Phone(name, phone);
	               phoneList.add(person);
	               break;
	            
	            case 2:
	               // Modify a phone record
	               System.out.print("수정할 이름을 입력하세요: ");
	               String searchName = scan.next();
	               for (Phone p : phoneList) {
	                  if (p.getName().equals(searchName)) {
	                     System.out.print("새로운 전화 번호 입력: ");
	                     String newPhone = scan.next();
	                     p.setPhone(newPhone);
	                     System.out.println("전화 번호가 수정되었습니다.");
	                     break;
	                  }
	               }
	               break;
	            
	            case 3:
	               // Delete a phone record
	               System.out.print("삭제할 이름을 입력하세요: ");
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
	                  System.out.println("전화 번호가 삭제되었습니다.");
	               } else {
	                  System.out.println("해당하는 이름의 전화 번호를 찾을 수 없습니다.");
	               }
	               break;
	            
	            case 4:
	               System.out.println("전화번호 목록:");
	               for (Phone p : phoneList) {
	                  System.out.println(p);
	               }
	               break;
	            
	            default:
	               System.out.println("잘못된 선택입니다.");
	         }
	      }
	   }
	}
