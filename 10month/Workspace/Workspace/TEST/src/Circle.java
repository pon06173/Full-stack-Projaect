
public class Circle {
	int radius = 5;
	String color = "빨강";
	
	Circle(){
		System.out.println("기본 원으로 출력");
	}
	
	
	Circle(int r){
		this.radius = r;
		
	}
	
	
	double getRound() {
		double round = 2 * 3.14 * radius; 
		return round;
	}
}
