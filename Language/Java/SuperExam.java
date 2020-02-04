class OverC {
    int i, j;
    public OverC(int i, int j) {
        this.i = i;
        this.j = j;
    }

    void show() {
        System.out.println("RUN, SUPER CLASS METHOD : show()");
    }
}

class SubOverC extends OverC {
    int k;

    public SubOverC(int i, int j, int k) {
        super(i, j);
        this.k = k;
    }

    void show() {
        System.out.println("RUN, SUB CLASS METHOD : show()");
        System.out.println("=== USING SUPER ===");
        super.show();
    }
}

public class SuperExam { 
    public static void main(String args[]) { 
      SubOverC over1 = new SubOverC(10, 20, 30); 
       
      System.out.println("value of i, j, k : " + over1.i + " " + over1.j + " " + over1.k); 
      over1.show(); 
    } 
  } 