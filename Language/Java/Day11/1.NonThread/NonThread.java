class GenClass {
	private int num;
	private String name;

	public GenClass(String a, int b) {
		name = a;
		num = b;
	}

	public void start() {
		for(int i=0;i<num;i++) {
			System.out.println(name + ":" + i);
		}
	}
}

public class NonThread {
	public static void main(String [] args) {
		GenClass t1 = new GenClass("First", 5);
		GenClass t2 = new GenClass("Second", 5);
		GenClass t3 = new GenClass("Third", 5);

		t1.start();
		t2.start();
		t3.start();
	}
}
