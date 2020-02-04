class MemberPrint implements Runnable {
	private int i=0;
	public void run() {
		show();
	}
	public void show() {
		for(;i<100;i++){
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

public class MemberPrintMain {
	public static void main(String [] args) {
		MemberPrint mr1 = new MemberPrint();
		Thread t1 = new Thread(mr1, "a");
		Thread t2 = new Thread(mr1, "b");
		Thread t3 = new Thread(mr1, "c");
		t1.start();
		t2.start();
		t3.start();
	}
}
