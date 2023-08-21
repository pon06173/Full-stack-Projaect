package proj01;

import java.util.Scanner;


public class Ch01Ex04 {

	public static void main(String[] args) {
		// 이름, 나이, 주소를 입력 받아서 출력 하는 프로그램 작성.
		Scanner scan = new Scanner(System.in);
		String name = null;
		int age = 0;
		String address = null;
		
		System.out.print("이름 입력 : ");
	    name = scan.next();
	    System.out.print("나이 입력 : ");
	    age = scan.nextInt();
	    System.out.print("주소 입력 : ");
	    address = scan.next();
	    // next()와 nextList() 같은 객체로 사용 하지 말것
	    // 하나의 객체로 nextLine()과 next()를 함께 사용하면 오류 발생

		// 
		System.out.printf("당신의 이름은 %s, 이고 나이는 %d, 이고 주소는 %s입니다", name, age, address);
	}

}
