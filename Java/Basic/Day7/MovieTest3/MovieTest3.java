class Movie3 {
	String part = "";

	public Movie3(){ } //기본 생성자

	public Movie3(String part) {
		this.part = part;
		System.out.println("Movie3");
	}
}

class Comedy3 extends Movie3 {
	String time = "";
	String name = "";

	public Comedy3() { } //기본 생성자

	public Comedy3(String time, String name) {
		this.time = time;
		this.name = name;
		System.out.println("Comedy");
	}
}

public class MovieTest3 {
	public static void main(String[] args) { 
        //파라미터가 있는 생성자만 호출합니다. 
        Comedy3 com = new Comedy3("21:00", "마파도"); 
         
        //기본 생성자는 기존에 생성자가 없는 경우만 
        //자동으로 만들어 집니다. 
        //Comedy3 com2 = new Comedy3(); 
         
        System.out.println(com.time); 
        System.out.println(com.name); 
	}
}
