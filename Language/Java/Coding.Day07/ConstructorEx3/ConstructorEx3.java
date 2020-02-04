class A3 {
    public A3() {
        System.out.println("Constructor A");
    }

    public A3(int x) {
        System.out.println("ARG Constructor A" + x);
    }
}

class B3 extends A3 {
    public B3() {
        System.out.println("Constructor B");
    }

    public B3(int x) {
        System.out.println("ARG Constructor B" + x);
    }
}

public class ConstructorEx3 {
    public static void main(String[] args) {
        B3 b;
        b = new B3(5);
    }
}