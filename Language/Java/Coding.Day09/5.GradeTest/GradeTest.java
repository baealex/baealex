interface InterfaceGrade {
    public void setScore(int kor, int eng);

    public abstract void print();
}

class Grade implements InterfaceGrade {
    int kor = 0;
    int eng = 0;

    @Override
    public void setScore(int kor, int eng) {
        this.kor = kor;
        this.eng = eng;
    }

    @Override
    public void print() {
        System.out.println("성적 증명서");
        System.out.println("국어 : " + this.kor);
        System.out.println("영어 : " + this.eng);
    }
}

public class GradeTest {
    public static void main(String[] args) {
        InterfaceGrade is = new Grade();
        is.setScore(90, 85);
        is.print();
    }
}