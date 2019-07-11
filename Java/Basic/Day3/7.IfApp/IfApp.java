public class IfApp {
    public static void main(String[] args) {
        int k = 100;

        if (k % 3 == 0 || k % 5 == 0) {
            System.out.println("k value is Drainage of 3 or Drainage of 5");
        } else {
            System.out.println("k value isn't Drainage of 3 or Drainage of 5");
        }

        if (k % 3 == 0 && k % 5 == 0) {
            System.out.println("k value is Drainage of 3 and Drainage of 5");
        } else {
            System.out.println("k value isn't Drainage of 3 and Drainage of 5");
        }
    }
}