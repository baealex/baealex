package Day07;

class A2 {
	public A2() {
		System.out.println("생성자 A");
	}
	
	public A2(int x) {
		System.out.println("생성자 A : " + x);
	}
}

class B2 extends A2 {
	public B2() {
		// default : super();
		super(100);
		System.out.println("생성자 B");
	}
}

public class ConstructorEx2 {
	public static void main(String [] args) {
		B2 b;
		b = new B2();
	}
}
