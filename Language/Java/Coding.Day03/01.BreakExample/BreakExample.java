import java.util.Scanner;

public class BreakExample {
    public static void main(String [] args) {
        Scanner in = new Scanner(System.in);
        int num = 0;
        while(true) {
            if(in.nextInt() == -1) {
                break;
            }
            num++;
        }
        System.out.println("Input numer count : "+num);
    }
}