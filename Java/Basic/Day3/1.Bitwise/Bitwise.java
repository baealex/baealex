public class Bitwise {
    public static void main(String [] args) {
        int a = 2;
        int b = 5;
        int c = a | b;

        int d = a & b;

        int e = a ^ b;

        int i, j;
        i = a << 2;
        j = b >> 2;

        System.out.println("        a = " + a);
        System.out.println("        b = " + b);
        System.out.println("      a|b = " + c);
        System.out.println("      a&b = " + d);
        System.out.println("      a^b = " + e);
        System.out.println("     a<<2 = " + i);
        System.out.println("     b>>2 = " + j);

        System.out.println("");

        System.out.println("        a = 00" + Integer.toBinaryString(a));
        System.out.println("        b = 0" + Integer.toBinaryString(b));
        System.out.println("      a|b = 0" + Integer.toBinaryString(c));
        System.out.println("      a&b = 000" + Integer.toBinaryString(d));
        System.out.println("      a^b = 0" + Integer.toBinaryString(e));
        System.out.println("     a<<2 = " + Integer.toBinaryString(i));
        System.out.println("     b>>2 = 000" + Integer.toBinaryString(j));
    }
}