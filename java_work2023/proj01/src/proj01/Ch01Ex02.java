package proj01;

public class Ch01Ex02 {

	public static void main(String[] args) {
		// ������ Ÿ�԰� ����
		// ������ ������ Ÿ�� : ��ü ����, �迭 ����, �������̽�...
		// �⺻ ������ Ÿ��: 8��(boolean, �Ǽ�, ����(������ ����))
		// ���ڵ� ���� Ÿ������ ��޵ȴ�.
		// boolean - �� ��(true, false) - 1bit
		// double - �Ǽ����� �⺻ Ÿ��  - 8byte
		// float - �Ǽ��� - 4byte
		// ������ 5���� ������ ������ Ÿ��
		// ������ �߿� 1���� ������ : char
		// byte, short, int, long
		// int���� 4byte
		// int���� �� short (2byte)
		// byte ���� 1byte
		// int���� �ι谡 long���̰� ǥ��� 1000L
		// �ڹٿ��� ������ ���� �Ҷ��� Ÿ���� �ݵ�� ���� �� �־���Ѵ�.
		// Ÿ�� ������ = �ʱⰪ;
		int age = 10;
		String name = "ȫ�浿";
		double number;
		number = 1000;
		
		age = (int)number;
		System.out.println("Age = " + age);
		System.out.print("Name = ");
		System.out.println(name);
	}

}
