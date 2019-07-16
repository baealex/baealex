public class t1 {
    public static void main(String[] args) {
        int[] score = new int[5];
        int sum = 0;
        for (int i = 0; i < 5; i++) {
            score[i] = Integer.parseInt(args[i]);
            sum += score[i];
        }
        int avg = sum / 5;
        System.out.println("SUM : " + sum);
        System.out.println("AVG : " + avg);
    }
}