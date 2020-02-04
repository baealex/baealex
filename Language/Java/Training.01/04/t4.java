import java.util.Calendar;

public class t4 {
    public static void main(String [] args) {
        String name = args[0];
        String tel = args[1];
        String addr = args[2];
        String jumin = args[3];

        Calendar calendar = Calendar.getInstance();
        int currYear = calendar.get(Calendar.YEAR);
        int age = currYear - Integer.parseInt("19"+jumin.charAt(0)+jumin.charAt(1));

        System.out.println("NAME : " + name);
        System.out.println("TEL  : " + tel);
        System.out.println("ADDR : " + addr);
        System.out.println("AGE  : " + age);
    }
}