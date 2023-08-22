package org.comstudy.myapp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

interface Command {
	void procerss();
}

class Menu implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("MENU");
		System.out.println("1.input 2.output 3.search 4.modify 5.delete 6.finish");
		System.out.print("Choice: ");
		PhoneBookApp.no = PhoneBookApp.scan.nextInt();
	}
}

class Input implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("INPUT");
		System.out.print("���� �Է�: ");
		String newName = PhoneBookApp.scan.next();
		System.out.print("��ȭ��ȣ �Է�: ");
		String newPhone = PhoneBookApp.scan.next();
		
		PhoneBookApp.phoneList.add(new Phone(PhoneBookApp.noSequence++, newName, newPhone));
		System.out.println("�� ��ȭ��ȣ �Է� �Ϸ�!");
		PhoneBookApp.no = 0;
	}
}

class Output implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("OUTPUT");
		//ArrayList<Phone> list = PhoneBookApp.phoneList;
		for(Phone phone : PhoneBookApp.phoneList) {
			System.out.println(phone);
		}
		PhoneBookApp.no = 0;
	}
}

class Modify implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("MODIFY");
		System.out.print("���� �� �̸� �Է�: ");
		String modifyName = PhoneBookApp.scan.next();
		// Phone ��ü�� equals()�� hashcode()�� Override�ؾ� �Ѵ�.
		int findIdx = PhoneBookApp.phoneList.indexOf(new Phone(modifyName));
		if(findIdx != -1) {
			System.out.print("�� ��ȭ��ȣ �Է�: ");
			String newPhone = PhoneBookApp.scan.next();
			PhoneBookApp.phoneList.get(findIdx).setPhone(newPhone);
		}
		if(findIdx == -1) {
			System.out.println("�˻� �� �̸��� �����ϴ�!");
		}
		
		PhoneBookApp.no = 0;
	}
}

class Search implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("SEARCH");
		System.out.print("�˻� �� �̸� �Է�: ");
		String modifyName = PhoneBookApp.scan.next();
		// Phone ��ü�� equals()�� hashcode()�� Override�ؾ� �Ѵ�.
		int findIdx = PhoneBookApp.phoneList.indexOf(new Phone(modifyName));
		if(findIdx != -1) {
			System.out.println("�˻� ���: ");
			System.out.println(PhoneBookApp.phoneList.get(findIdx));
		}
		if(findIdx == -1) {
			System.out.println("�˻� �� �̸��� �����ϴ�!");
		}
		
		PhoneBookApp.no = 0;
	}
}

class Delete implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("DELETE");
		System.out.print("���� �� �̸� �Է�: ");
		String modifyName = PhoneBookApp.scan.next();
		// Phone ��ü�� equals()�� hashcode()�� Override�ؾ� �Ѵ�.
		int findIdx = PhoneBookApp.phoneList.indexOf(new Phone(modifyName));
		if(findIdx != -1) {
			System.out.println(PhoneBookApp.phoneList.remove(findIdx));
			System.out.println("���� �Ϸ�");
		}
		if(findIdx == -1) {
			System.out.println("�˻� �� �̸��� �����ϴ�!");
		}
		
		PhoneBookApp.no = 0;
	}
}

class Finish implements Command {
	@Override
	public void procerss() {
		PhoneBookApp.printTitle("FINISH");
		System.out.println("���μ��� ����! �����ϼ̽��ϴ�. ");
		

		// ���μ��� ���� ����
		System.exit(0);
	}
}

public class PhoneBookApp {
	public static Scanner scan = new Scanner(System.in);
	public static final ArrayList<Phone> phoneList = new ArrayList<Phone>();
	public static int noSequence = 1;
	static {
		phoneList.add(new Phone(noSequence++, "ȫ�浿", "010-1111-1111"));
		phoneList.add(new Phone(noSequence++, "��浿", "010-2222-2222"));
		phoneList.add(new Phone(noSequence++, "�ڱ浿", "010-3333-3333"));
	}
	public static final HashMap<Integer, Command> commandMap = new HashMap<Integer, Command>();
	static {
		// static �ʱ�ȭ �� - static ����� �ʱ�ȭ �Ѵ�.
		commandMap.put(0, new Menu());
		commandMap.put(1, new Input());
		commandMap.put(2, new Output());
		commandMap.put(3, new Search());
		commandMap.put(4, new Modify());
		commandMap.put(5, new Delete());
		commandMap.put(6, new Finish());
	}
	public static int no = 0;
	public static Command command = null;
	
	public static void printTitle(String title) {
		System.out.println("::::::::::::::::::::: "+ title +" :::::::::::::::::::::");
	}

	public static void main(String[] args) {
		command = commandMap.get(no);
		command.procerss();
		System.out.println("---------------------------------------------------");
		// ���ȣ��
		main(null);
	}
}