class Person1 {
    String name;
    String id;
    public Person1(String name) {
        this.name = name;
    }
}

class Student1 extends Person1 {
    String grade;
    String department;
    public Student1(String name) {
        super(name);
    }
}

public class UpcastingEx1 {
    public static void main(String [] args) {
        Person1 p;
        Student1 s = new Student1("JaeMoon");
        p = s;
        System.out.println(p.name);
        p = new Student1("JaeMoon");
        // p.grade = "A";
        // p.department = "Com";
    }
}