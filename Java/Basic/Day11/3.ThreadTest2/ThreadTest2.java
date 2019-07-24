class ThreadOne implements Runnable {
	private int num;
	private String name;
	public ThreadOne(String a, int b) {
		name = a;
		num = b;
	}

	public void run() {
		for(int i=0;i<num;i++) {
			System.out.println(name+":"+i);
		}
	}
}

public class ThreadTest2 {
	public static void main(String [] args) {
		Thread t1 = new Thread(new ThreadOne("first", 10));
		Thread t2 = new Thread(new ThreadOne("second", 10));
		Thread t3 = new Thread(new ThreadOne("third", 10));
		t1.start();
		t2.start();
		t3.start();
	}
}

