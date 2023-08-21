package proj03;

import java.util.Scanner;

class People {
   // ��� �ʵ�(Ŭ���� ������ ��� ����)
   // ĸ��ȭ
   // ��� �ʵ�� private���� ����
   private String name;
   private int age;
   private String address;
      
   // ������ �Լ�
   public People() {
      // ����Ʈ ������ - �Ű������� ���� ������
   }
   public People(String name, int age, String address) {
      // ������ �����ε� - �Ű������� �ִ� ������. ��� �ʵ带 �ʱ�ȭ �ϴ� ����
      this.name = name;
      this.age = age;
      this.address = address;
   }
   
   // ��� �޼���(Ŭ���� ������ ��� �Լ�)
   // ��� �޼���� public
   public void setAge(int age) {
      // ��� �ʵ忡��  this. �� �ٿ� �ش�.
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
      // ���� ���Ͽ� �ִ� Ŭ��������  �ٸ� Ŭ���� ��ü�� private ����� ���� �Ұ���.
      // private����� ����ϴ�  public ����� ���ؼ� �����Ѵ�.
      People person1 = new People();
      Scanner scan = new Scanner(System.in);
      Scanner scan2 = new Scanner(System.in);
      
      System.out.print("���� �Է�: ");
      //person1.name = scan.next();
      person1.setName(scan.next());
      System.out.print("���� �Է�: ");
      int age = scan.nextInt();
      person1.setAge(age);
      System.out.print("�ּ� �Է�: ");
      //String address = scan2.nextLine(); 
      //person1.setAddress(address);
      person1.setAddress(scan2.nextLine());
      
      //System.out.printf("%s, %d, %s\n", person1.name, person1.age, person1.address);
      System.out.printf("%s, %d, %s\n", 
            person1.getName(), person1.getAge(), person1.getAddress());

   }

}