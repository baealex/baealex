public class CastTest { 
    public static void main(String args[]) { 
        int i = 1234;
        int k = 0;
        float f = 10.5f;
        double d = 100.55;

        System.out.println(k);

        k = (int)f;
        System.out.println(k);

        f = i;
        System.out.println(f);

        f = (float)d;
        System.out.println(f);
    } 
} 