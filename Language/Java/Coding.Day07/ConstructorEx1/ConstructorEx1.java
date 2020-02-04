class A1 {
    // ERROR
    public A1(int x) {
        System.out.println("Constructor A");
    }
}

class B1 extends A1 {
    public B1() {
        System.out.println("Constructor B");
    }
}

public class ConstructorEx1 {
    public static void main(String[] args) {
        B1 b;
        b = new B1();
    }
}