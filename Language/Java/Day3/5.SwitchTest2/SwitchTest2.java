public class SwitchTest2 {
    public static void main(String args[]) {
        char c = 'C';
        String str = "C";

        switch (c) {
        case 'A':
            System.out.println("This is A");
            break;
        case 'B':
            System.out.println("This is B");
            break;
        case 'C':
            System.out.println("This is C");
            break;
        case 'D':
            System.out.println("This is D");
            break;
        default:
            System.out.println("Plz input btween A to D");
            break;
        }
    }
}
