package Day07;

class TV2 {
	public TV2() {
		System.out.println("TV2");
	}
}

class Movie2 extends TV2 {
	String part = "한국 영화";

	public Movie2() {
		System.out.println("Movie2");
	}
}

class Action2 extends Movie2 {
	String name = "";

	public Action2() {
		System.out.println("Action2");
	}
}

public class MovieTest2 {
	public static void main(String[] args) {
		// 기본 생성자는 자동으로 생성되어 사용됩니다.
		Action2 act = new Action2();
		act.name = "마파도";
		System.out.println(act.name);
	}
}