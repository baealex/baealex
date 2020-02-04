class StaticPrint implements Runnable {
	private static int i=0;
	public void run() {
		show();
	}
	public void show() {
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

public class StaticPrintMain {
	public static void main(String [] args) {
		StaticPrint mr1 = new StaticPrint();
		StaticPrint mr2 = new StaticPrint();
		StaticPrint mr3 = new StaticPrint();
		Thread t1 = new Thread(mr1, "a");
		Thread t2 = new Thread(mr2, "b");
		Thread t3 = new Thread(mr3, "c");
		t1.start();
		t2.start();
		t3.start();
	}
}
