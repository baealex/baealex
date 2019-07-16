public class t6 {
    public static void main(String [] args) {
        if(Integer.parseInt(args[0]) > 0) {
            System.out.println("Positive");
        } else if(Integer.parseInt(args[0]) == 0) {
            System.out.println("0");
        } else {
            System.out.println("Negative");
        }
    }
}