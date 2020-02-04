import java.util.Scanner;

public class SwitchTest3new {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int score = in.nextInt();

        int result = score-score%10;

        switch(result) {
            case 100:
            case 90:
                System.out.println("Grade A!");
                break;
            case 80:
                System.out.println("Grade B!");
                break;
            case 70:
                System.out.println("Grade C!");
                break;
            case 60:
                System.out.println("Grade D!");
                break;
            default:
                System.out.println("Try!");
                break;
        }
    }
}