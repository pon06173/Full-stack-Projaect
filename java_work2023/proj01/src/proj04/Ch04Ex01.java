package proj04;

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

public class Ch04Ex01 {
	//전화번호 10개를 phoneArr에 저장하고
	//배열이 어렵다면 ArrayList로 사용해도 됩니다.
	//입력, 출력, 검색, 수정, 삭제 되도록 구현하세요.
	
   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
      Phone[] phoneArr = new Phone[2];
      
      for(int i=0; i<phoneArr.length; i++) {
          System.out.print("이름 입력: ");
          String name = scan.next();
          System.out.print("전화 번호 입력");
          String phone = scan.next();
          Phone person = new Phone(name, phone);
          phoneArr[i] = person;
       }
      
      System.out.println(Arrays.toString(phoneArr));
      
      
      System.out.print("수정할 이름을 입력하세요: ");
      String searchName = scan.next();
      
      for (int i = 0; i < phoneArr.length; i++) {
         if (phoneArr[i].getName().equals(searchName)) {
            System.out.print("새로운 전화 번호 입력: ");
            String newPhone = scan.next();
            phoneArr[i].setPhone(newPhone);
            System.out.println("전화 번호가 수정되었습니다.");
            break;
         }
      }
      
      System.out.println(Arrays.toString(phoneArr));
   }
}