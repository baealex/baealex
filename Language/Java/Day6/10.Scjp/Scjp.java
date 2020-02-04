class ScjpPass {
    int t1 = 0;
    int t2 = 0;
    int t3 = 0;
    int t4 = 0;

    static int BOUNS = 100;

    public ScjpPass() {

    }

    public ScjpPass(int t1, int t2, int t3, int t4) {
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
        this.t4 = t4;
    }
}

public class Scjp {
    public static void main( String [] args ) {
        System.out.println("ScjpPass.BOUNS : " + ScjpPass.BOUNS);

        ScjpPass sp = new ScjpPass(85,90,80,70);
        System.out.println("sp.t1 : " + sp.t1);
        System.out.println("sp.BOUNS : " + sp.BOUNS);
    }
}