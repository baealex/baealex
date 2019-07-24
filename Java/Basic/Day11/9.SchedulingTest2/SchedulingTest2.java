class RunThread2 extends Thread {
	public RunThread2(String name) {
		super(name);
	}

	public void run() {
		for(int i=1; i<=30000000; i++) {
			if(i%50==0) {
				System.out.println("THREAD ["+getName()+"] : "+i);
				try {
					sleep(1);
					System.out.print("");
				} catch(Exception e) {

				}
			}
		}
	}
}

public class SchedulingTest2 {
	public static void main(String [] args) {
		Thread[] t = new RunThread2[5];
		t[0] = new RunThread2("S");
		t[1] = new RunThread2("BS");
		t[2] = new RunThread2("BD");
		t[3] = new RunThread2("D");
		t[4] = new RunThread2("O");

		t[0].start();
		t[1].start();
		t[2].start();
		t[3].start();
		t[4].start();
	}
}
