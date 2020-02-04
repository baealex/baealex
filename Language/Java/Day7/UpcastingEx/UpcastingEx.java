class Person2 {
	String name;
	String id;

	public Person2(String name) {
		this.name = name;
	}
	
	public String toString() {
		return name; 
	}
}

class Student extends Person2 {
	String grade;
	String department;

	public Student(String name) {
		super(name);
	}
	
	public String toString() {
		return name+" "+grade+" "+department; 
	}
}

public class UpcastingEx {
	public static void main(String[] args) {
		Person2 p;
		Student s = new Student("이재문");
		p = s; // 업캐스팅 발생
		
		s.grade = "dd";
		
		System.out.println(p.hashCode());
		System.out.println(p.toString().hashCode());
		// System.out.println(p.grade.hashCode());
		System.out.println(s.hashCode());
		System.out.println(s.toString().hashCode());
		System.out.println(s.grade.hashCode());

		System.out.println(p); // 오류 없음
		// p.grade = "A"; // 컴파일 오류
		// p.department = "Com"; // 컴파일 오류
		
		Student s2 = (Student)p;
		s2.grade = "A";
		s2.department = "Com";
		System.out.println(s2);
	}
}