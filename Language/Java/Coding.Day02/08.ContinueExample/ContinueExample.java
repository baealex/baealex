public class ContinueExample {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 1)
                continue;
            else
                sum = sum + i;
        }
        System.out.println("Even sum is " + sum + " between 1 to 100");
    }
}