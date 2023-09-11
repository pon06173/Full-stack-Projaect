package org.comstudy.ch01;

import java.util.Scanner;

public class Ch01Ex03 {
	public static void main(String[] args) {
		// 키보드에서 데이터 입력 받아서 변수에 저장하기
		// Scanner 객체 이용.
		Scanner scan = new Scanner(System.in);
		
		// 변수 선언 - 지역 변수는 초기화 필수.
		int age = 0;
		// 변수에 값 입력
		System.out.print("나이를 입력 하세요: ");
		age = scan.nextInt();
		// 변수의 값 출력
		System.out.println("당신의 나이는 "+ age +"세입니다.");
	}
}
