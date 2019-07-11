public class GooGooDan {
    public static void main(String args[]) {
        // 1, 4, 7
        for (int i = 9; i >= 1; i -= 3) {
            System.out.println("   " + i + "Dan\t\t   " + (i - 1) + "Dan\t\t   " + (i - 2) + "Dan");

            System.out.println("------------------------------------------");
            for (int j = 9; j >= 1; j--) {
                System.out.print(i + " * " + j + " = " + i * j + "\t");
                System.out.print((i - 1) + " * " + j + " = " + (i - 1) * j + "\t");
                System.out.print((i - 2) + " * " + j + " = " + (i - 2) * j);
                System.out.println("");
            }
            System.out.println("");
        }
    }
}