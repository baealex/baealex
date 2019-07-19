class A2 {
    public A2() {
        System.out.println("Constructor A");
    }

    public A2(int x) {
        System.out.println("ARG Constructor A");
    }
}

class B2 extends A2 {
    public B2() {
        System.out.println("Constructor B");
    }

    public B2(int x) {
        System.out.println("ARG Constructor B");
    }
}

public class ConstructorEx2 {
    public static void main(String[] args) {
        B2 b;
        b = new B2(5);
    }
}