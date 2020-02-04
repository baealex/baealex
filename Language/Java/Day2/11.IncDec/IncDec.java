public class IncDec {
    public static void main(String [] args) {
        long i = 0;
        long hap = 0;

        hap = ++i;
        System.out.println(hap);
        hap = i;
        System.out.println(hap);
        hap = i++;
        System.out.println(hap);
        hap = i;
        System.out.println(hap);
        hap = ++hap + ++i;
        System.out.println(hap);
    }
}