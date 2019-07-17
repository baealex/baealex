public class DefaultConstructor {
    int x;
    public void setX(int x) { this.x = x; }
    public int  getX()      { return x;   }

    public DefaultConstructor(int x) {
        this.x = x;
    }

    /*
    public DefaultConstructor() {
        기본 생성자 외 생성자 존재시 기본 생성자 반드시 생성.
    }
    */

    public static void main( String [] args ) {
        DefaultConstructor p1 = new DefaultConstructor(3);
        int n = p1.getX();

        DefaultConstructor p2 = new DefaultConstructor();
        p2.setX(5);
    }
}