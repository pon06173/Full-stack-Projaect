package proj01;

import java.util.Scanner;


public class Ch01Ex04 {

	public static void main(String[] args) {
		// �̸�, ����, �ּҸ� �Է� �޾Ƽ� ��� �ϴ� ���α׷� �ۼ�.
		Scanner scan = new Scanner(System.in);
		String name = null;
		int age = 0;
		String address = null;
		
		System.out.print("�̸� �Է� : ");
	    name = scan.next();
	    System.out.print("���� �Է� : ");
	    age = scan.nextInt();
	    System.out.print("�ּ� �Է� : ");
	    address = scan.next();
	    // next()�� nextList() ���� ��ü�� ��� ���� ����
	    // �ϳ��� ��ü�� nextLine()�� next()�� �Բ� ����ϸ� ���� �߻�

		// 
		System.out.printf("����� �̸��� %s, �̰� ���̴� %d, �̰� �ּҴ� %s�Դϴ�", name, age, address);
	}

}
