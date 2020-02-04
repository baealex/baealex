class SleepThread extends Thread {
	public SleepThread(String name) {
		setName(name);
	}

	public void run() {
		show();
	}
	
	public void show() {
		for(int i=0; i<50; i++) {
			print();
			try {
				Thread.sleep(50);
			} catch(InterruptedException ite) {

			}
		}
	}

	public void print() {
		System.out.print(getName());
	}
}

public class SleepThreadMain {
	public static void main(String [] args) {
		SleepThread t1 = new SleepThread("a");
		SleepThread t2 = new SleepThread("b");
		SleepThread t3 = new SleepThread("c");
		t2.setPriority(7);
		t1.start();
		try {
			t1.join();
		} catch(InterruptedException ite) {

		}
		t2.start();
		t3.start();
	}
}
