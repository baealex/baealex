import java.util.Scanner;

public class ScannerExam {
    public static void main(String args[]) {
        Scanner a = new Scanner(System.in);
        System.out.println("Your age is " + a.nextInt());
        System.out.println("Your weight is " + a.nextDouble());
        System.out.println("Your height is " + a.nextDouble());
    }
}
