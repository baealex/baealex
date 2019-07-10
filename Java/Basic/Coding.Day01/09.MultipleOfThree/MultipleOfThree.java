import java.util.Scanner;

public class MultipleOfThree {
    public static void main(String [] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Input number : ");
        int number = in.nextInt();
        if(number % 3 == 0) {
            System.out.println("Drainage of 3");
        }
        else {
            System.out.println("Not Drainage of 3");
        }
    }
}