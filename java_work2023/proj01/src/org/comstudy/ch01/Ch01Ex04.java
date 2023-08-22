package org.comstudy.ch01;

import java.util.Scanner;

public class Ch01Ex04 {

	public static void main(String[] args) {
		// 이름, 나이, 주소를 입력 받아서 출력 하는 프로그램 작성.
		Scanner scanner = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		String name = null; // 참조 변수는 null로 초기화 가능.
		int age = 0; // 기본 형은 0으로 초기화
		String address = null;
		
		System.out.print("이름 입력: ");
		name = scanner.next();
		System.out.print("나이 입력: ");
		age = scanner.nextInt();
		System.out.print("주소 입력: ");
		address = scan2.nextLine();  // next()와 같은 객체로 사용 하지 말것.
		// 하나의 객체로 nextLine()과 next()를 함께 사용하면 오류 발생
		
		// printf() : 포멧 기호를 이용한 문자열 출력
		// %s, %d, %i, %f, %o, %x ...
		// 특수 문자 : \n, \r, \a, \t ...
		System.out.printf("성명:%s, 나이:%d, 주소:%s \n", name, age, address);
	}

}
