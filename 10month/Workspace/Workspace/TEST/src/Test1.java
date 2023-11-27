import java.util.Scanner;

public class Test1 {

	public static void main(String[] args) {

//		System.out.println("\"안녕하세요\"");
//		System.out.println("bbb");
		
		Scanner sc = new Scanner(System.in);
//		
//		System.out.print("이름 : ");
//		String name = scanner.next();
//		
//		System.out.print("나이 : ");
//		int age = scanner.nextInt();
//		
//		System.out.println(name);
//		System.out.println(age);
		
//		int x = scan.nextInt();
//		int y = scan.nextInt();
		
//		System.out.println(x + y);
		
//		if (x + y >= 30) {
//			System.out.println("OK");
//		} else if (x + y >= 20){
//			System.out.println("중간");
//		} else {
//			System.out.println("NO");
//		}
		
		
		
		
	
	   int score = sc.nextInt();
		 if (score >= 95 && score <=100){
          System.out.println("A+");
      } else if (score >= 90 && score <=95) {
          System.out.println("A");
      } else if (score >= 85 && score <=90) {
          System.out.println("B+");
      } else if (score >= 80 && score <=85) {
          System.out.println("B");  
      } else if (score >= 75 && score <=80) {
          System.out.println("C+");  
      } else if (score >= 70 && score <=75) {
          System.out.println("C");  
      } else if (score >= 65 && score <=70) {
          System.out.println("D+");  
      } else if (score >= 60 && score <=65) {
          System.out.println("D");  
      } else if (score >= 0 && score <=60) {
          System.out.println("F");  
      }else {
      	System.out.println("범위를 초과합니다");
      }
//		catch (Exception e) {
//			System.out.println(e);
//		} finally {
//			System.err.println("무조건 실행");
//		}

        } 
	}
	
