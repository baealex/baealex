class TV {

}

class Movie extends TV {
	String part = "한국 영화";
}

class Action extends Movie {
	String name = "";
}

public class MovieTest {
	public static void main(String[] args) {
		// 기본 생성자는 자동으로 생성되어 사용됩니다.
		Action act = new Action();
		act.name = "마파도"; // 이문식
		System.out.println(act.name);
	}
}