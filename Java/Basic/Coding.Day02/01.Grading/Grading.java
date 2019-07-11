import java.util.Scanner;

public class Grading {
    public static void main(String[] args) {
        char grade;
        Scanner a = new Scanner(System.in);
        while (a.hasNext()) {
            int score = a.nextInt();
            if (score >= 90.0)
                grade = 'A';
            else if (score >= 80.0)
                grade = 'B';
            else if (score >= 70.0)
                grade = 'C';
            else if (score >= 60.0)
                grade = 'D';
            else
                grade = 'F';
            System.out.println("Grade is " + grade);
        }
    }
}