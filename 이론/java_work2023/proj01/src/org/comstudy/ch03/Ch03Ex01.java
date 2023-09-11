package org.comstudy.ch03;

import java.util.Scanner;

class People {
	// 멤버 필드(클래스 내부의 멤버 변수)
	// 캡슐화
	// 멤버 필드는 private으로 선언
	private String name;
	private int age;
	private String address;
		
	// 생성자 함수
	public People() {
		// 디폴트 생성자 - 매개변수가 없는 생성자
	}
	public People(String name, int age, String address) {
		// 생성자 오버로딩 - 매개변수가 있는 생성자. 멤버 필드를 초기화 하는 목적
		this.name = name;
		this.age = age;
		this.address = address;
	}
	
	// 멤버 메서드(클래스 내부의 멤버 함수)
	// 멤버 메서드는 public
	public void setAge(int age) {
		// 멤버 필드에는  this. 을 붙여 준다.
		this.age = age;
	}
	public void setName (String name) {
		this.name = name;
	}
	public void setAddress(String addr) {
		address = addr;
	}
	
	public int getAge() {
		return age;
	}
	public String getName() {
		return name;
	}
	public String getAddress() {
		return address;
	}
}

public class Ch03Ex01 {
	public static void main(String[] args) {
		People person1 = null;
		Scanner scan = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		
		System.out.print("성명 입력: ");
		String name = scan.next();
		System.out.print("나이 입력: ");
		int age = scan.nextInt();
		System.out.print("주소 입력: ");
		String address = scan2.nextLine();
		// 생성자를 이용해서 데이터 초기화
		person1 = new People(name, age, address);
		
		System.out.printf("%s, %d, %s\n", 
			person1.getName(), person1.getAge(), person1.getAddress());
	}
	
	public static void test2(String[] args) {
		// 같은 파일에 있는 클래스여도  다른 클래스 객체의 private 멤버는 접근 불가능.
		// private멤버를 사용하는  public 멤버를 통해서 접근한다.
		People person1 = new People();
		Scanner scan = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		
		System.out.print("성명 입력: ");
		//person1.name = scan.next();
		person1.setName(scan.next());
		System.out.print("나이 입력: ");
		int age = scan.nextInt();
		person1.setAge(age);
		System.out.print("주소 입력: ");
		//String address = scan2.nextLine(); 
		//person1.setAddress(address);
		person1.setAddress(scan2.nextLine());
		
		//System.out.printf("%s, %d, %s\n", person1.name, person1.age, person1.address);
		System.out.printf("%s, %d, %s\n", 
				person1.getName(), person1.getAge(), person1.getAddress());

	}

}
