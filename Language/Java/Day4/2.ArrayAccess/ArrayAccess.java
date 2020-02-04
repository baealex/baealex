import java.util.Scanner;
public class ArrayAccess {
    public static void main (String[] args) {
        Scanner in = new Scanner(System.in);
        int intArray[] = new int[5];

        for (int i = 0; i < 5; i++) {
            intArray[i] = in.nextInt();
        }

        // int max = 0;
        // int min = Integer.MAX_VALUE;

        int max = intArray[0];
        int min = intArray[0];

        for (int i = 0; i < 5; i++) {
            if (intArray[i] > max) max = intArray[i];
            if (intArray[i] < min) min = intArray[i];
        }
        System.out.print("Max Value : " + max + ", Min Value : " + min);
    }
}