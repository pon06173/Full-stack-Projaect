package proj02;

import java.util.Scanner;

//��� ������ �Է¹޴� Ŭ���� 
//�� ���Ͽ� public Ŭ������ 1���� �����Ѵ�.
//������ Ŭ������  public���� ���� ��Ű�� ��� Ŭ�����̴�.
//���������� public�� �ܺ� ��Ű��������  import�ؼ� ��� ����.
//Ŭ���� ���� ��ġ: �Լ� ����, �Լ� �ܺ�, Ŭ���� ����, Ŭ���� �ܺ� ...


// Ŭ���� �̸��� �빮�ڷ� ����, �Լ���, �������� �ҹ��ڷ� ����
// �Լ����� ����� ����
// Ŭ����, �������� ���� ����
class People {
	// ������ �Լ�
	// ��� �ʵ� (Ŭ���� ������ ��� ����)
	// ��� �޼��� (Ŭ���� ������ ��� �Լ�)
	
	int age;
	String name;
	String address;
}

//public�� �ٿ��� Ŭ������ �����̸��� ������ ��ǥ Ŭ�����̴�.
public class Ch02Ex01 {
	public static void main(String[] args) {
		// ��ü�� ���� �ϰ� �����͸� �����ϱ�
	    // ��ü�� ���� �ϱ� ���� Ŭ������ ���� �����.
	    // Ŭ������ ��ü�� Ʋ�̴�.

		People person1 = new People();
		Scanner scan = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);
		
		System.out.print("���� �Է�: ");
		person1.name = scan.next();
		System.out.print("���� �Է�: ");
		person1.age = scan.nextInt();
		System.out.print("�ּ� �Է�: ");
		//scan.next();
		person1.address = scan.nextLine();
		
		System.out.printf("%s, %d, %s\n",person1.name, person1.age, person1.address);
	}

}
