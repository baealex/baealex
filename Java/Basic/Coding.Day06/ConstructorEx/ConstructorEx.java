class A {
    public A() {
        System.out.println("constructor A");
    }
}

class B extends A {
    public B() {
        System.out.println("constructor B");
    }
}

class C extends B {
    public C() {
        System.out.println("constructor C");
    }
}

public class ConstructorEx {
    public static void main(String[] args) {
        C c;
        c = new C();
    }
}