public class t3 {
    public static void main(String [] args) {
        int [] int_args = new int[5];
        for(int i=0;i<5;i++) {
            int_args[i] = Integer.parseInt(args[i]);
        }

        System.out.print("Absolute Value :");

        for(int i=0;i<5;i++) {
            if(int_args[i] < 0) {
                System.out.print(" " + int_args[i] * -1);
            }
            else {
                System.out.print(" " + int_args[i]);
            }
        }
    }
}