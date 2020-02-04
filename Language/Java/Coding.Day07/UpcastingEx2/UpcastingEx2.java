class Person2 {
    String name;
    String id;
    public Person2(String name) {
        this.name = name;
    }
}

class Student2 extends Person2 {
    String grade;
    String department;
    public Student2(String name) {
        super(name);
    }
}

public class UpcastingEx2 {
    public static void main(String [] args) {
        Person2 p = new Student2("JaeMoon");;
        Student2 s;
        s = (Student2)p;
        System.out.println(s.name);
        s.grade = "A";
    }
}