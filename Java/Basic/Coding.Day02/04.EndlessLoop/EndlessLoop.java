public class EndlessLoop {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;
        while (i <= 100) {
            i++;
            if (i % 2 == 1)
                continue;
            else
                sum = sum + i;
        }
        System.out.println("Even sum is " + sum + " between 1 to 100");
    }
}