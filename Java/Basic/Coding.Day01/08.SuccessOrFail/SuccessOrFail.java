import java.util.Scanner;

public class SuccessOrFail {
    public static void main(String [] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Input point : ");
        int score = in.nextInt();
        if(score >= 80) {
            System.out.println("Nice, You pass!");
        } else {
            System.out.println("Bad, You fail!");
        }
        in.close();
    }
}