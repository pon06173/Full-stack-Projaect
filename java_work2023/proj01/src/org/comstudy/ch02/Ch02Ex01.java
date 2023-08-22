package org.comstudy.ch02;

import java.util.Scanner;

// 사람 정보를 입력받는 클래스 
// 한 파일에 public 클래스는 1개만 존재한다.
// 나머지 클래스는  public쓸수 없는 팩키지 멤버 클래스이다.
// 접근지정자 public은 외부 팩키지에서도  import해서 사용 가능.
// 클래스 선언 위치: 함수 내부, 함수 외부, 클래스 내부, 클래스 외부 ...

// 클래스 이름은 대문자로 시작, 함수명, 변수명은 소문자로 시작.
// 함수명은 동사로 시작.
// 클래명, 변수명은 명사로 시작
class People {
	// 생성자 함수
	// 멤버 필드(클래스 내부의 멤버 변수)
	// 멤버 메서드(클래스 내부의 멤버 함수)
	
	int age;
	String name;
	String address;
}

// public이 붙여진 클래스는 파일이름과 동일한 대표 클래스이다.
public class Ch02Ex01 {
	public static void main(String[] args) {
		System.out.println("여기는 main함수");
		// 다른 멤버 함수 호출
		test(null);
	}
	
	// main()함수는 하나의 클래스에 1개만 존재하는 클래스 실행의 진입점이다.
	public static void test(String[] args) {
		// 객체를 선언 하고 데이터를 저장하기
		// 객체를 선언 하기 위해 클래스를 먼저 만든다.
		// 클래스는 객체의 틀이다.
		
		// 선언 한 클래스는 객체를 생성 해야 사용 가능하다.
		// String이나 Scanner처럼 new를 이용해서 객체를 선언한다.
		People person1 = new People();
		Scanner scan = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		
		System.out.print("성명 입력: ");
		person1.name = scan.next();
		System.out.print("나이 입력: ");
		person1.age = scan.nextInt();
		System.out.print("주소 입력: ");
		person1.address = scan2.nextLine(); 
		//scan.next(); // 버퍼에 남아있는 \n 문자가 제거 된다.
		// 하나의 scan만 사용 하려면 nextLine() 후 버퍼 비우기
		
		// 객체에 저장된 데이터 사용.
		// 켭슐화 규칙을 지키지 않았다.
		System.out.printf("%s, %d, %s\n", person1.name, person1.age, person1.address);
	}
}
