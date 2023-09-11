package org.comstudy.ch04;

import java.util.Scanner;

class Phone {
	private String name;
	private String phone;
	
	public Phone() {
		// 디폴트 생성자
	}
	
	public Phone(String name, String phone) {
		// super(); 상속 받지 않으니까 부모의 생성자 호출은 삭제 해야 함.
		this.name = name;
		this.phone = phone;
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
		return "[name=" + name + ", phone=" + phone + "]";
	}
}

public class Ch04Ex01 {
	// *** 과제 ***
	// 전화 번호 10개를 phoneArr에 저장하고 
	// 배열이 어렵다면 ArrayList로 사용 해도 됩니다. 
	// 입력, 출력, 검색, 수정, 삭제 되도록 구현 하세요.
	// 자바를 먼저 공부 하신 분들은 파일에 데이터가 저장되도록 하세요.
	// 다시 실행하면 파일의 데이터를 읽어와서 배열에 셋팅 되도록 하세요.
	
	static Scanner scan = new Scanner(System.in);
	static Phone[] phoneArr = new Phone[30];
	static int top = 0;
	// 토론 과제: static 멤버는 static멤버만 접근 가능 한 이유
	public static void main(String[] args) {
		while(true) {
			System.out.println("::::::: MENU ::::::::");
			System.out.println("1.input 2.output 3.search 4.modify 5.delete 6.finish");
			System.out.print("Choice: ");
			int no = scan.nextInt();
			if(no == 1) {
				System.out.println("::: 입력 기능 :::");
				if(top >= phoneArr.length) {
					System.out.println("더 이상 입력 불가능!");
				} else {
					System.out.print("이름 입력: ");
					String name = scan.next();
					System.out.print("전화 번호 입력");
					String phone = scan.next();
					Phone person = new Phone(name, phone);
					phoneArr[top] = person;
					top = top + 1;
				}
			} else if(no == 2) {
				System.out.println("::: 출력 기능 :::");
				//System.out.println(Arrays.toString(phoneArr));
				for(int i=0; i<top; i++) {
					System.out.println(i + "\t" + phoneArr[i].toString());
				}
			} else if(no == 3) {
				System.out.println("::: 검색 기능 :::");
				
			} else if(no == 4) {
				System.out.println("::: 수정 기능 :::");
				
			} else if(no == 5) {
				System.out.println("::: 삭제 기능 :::");
				
			} else if(no == 6) {
				System.out.println("::: 종료 :::");
				break;
			}
		}
	}
}
