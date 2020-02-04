class StaticLockPrint implements Runnable {
	private static int i;
	static { i=5; }
	public void run(){
		show();
	}
	public void show() {
		synchronized(StaticLockPrint.class) {
			for(;i<100;i++) {
				if(((Thread.currentThread()).getName()).equals("a")) {
					System.out.print("[A"+i+"]");
				}
				else if(((Thread.currentThread()).getName()).equals("b")) {
					System.out.print("[B"+i+"]");
				}
				else if(((Thread.currentThread()).getName()).equals("c")) {
					System.out.print("[C"+i+"]");
				}
			}
		}
	}
}

public class StaticLockPrintMain {
	public static void main(String [] args) {
		StaticLockPrint mr1 = new StaticLockPrint();
		StaticLockPrint mr2 = new StaticLockPrint();
		StaticLockPrint mr3 = new StaticLockPrint();
		Thread t1 = new Thread(mr1, "a");
		Thread t2 = new Thread(mr2, "b");
		Thread t3 = new Thread(mr3, "c");
		t1.start();
		t2.start();
		t3.start();
	}
}
