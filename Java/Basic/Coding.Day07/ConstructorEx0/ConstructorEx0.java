class A0 {
    public A0() {
        System.out.println("Constructor A");
    }

    public A0(int x) {
        // .....
    }
}

class B0 extends A0 {
    public B0() {
        System.out.println("Constructor B");
    }
}

public class ConstructorEx0 {
    public static void main(String[] args) {
        B0 b;
        b = new B0();
    }
}