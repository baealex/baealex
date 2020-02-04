import java.util.Scanner;

public class ArrayLength {
    public static void main(String [] args) {
        Scanner in = new Scanner(System.in);
        int intArray[] = new int[5];
        double sum = 0;
        for(int i=0;i<intArray.length;i++) {
            intArray[i] = in.nextInt();
        }
        for(int i=0;i<intArray.length;i++) {
            sum += intArray[i];
        }
        System.out.print("Avg = "+sum/intArray.length);
    }
}