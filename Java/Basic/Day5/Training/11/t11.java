import java.util.Calendar;

public class t11 {
    public static void main(String [] args) {
        java.util.Scanner in = new java.util.Scanner(System.in);

        System.out.print("이름 : ");
        String name = in.nextLine();

        System.out.print("주소 : ");
        String addr = in.nextLine();

        System.out.print("생일 : ");
        String birth = in.nextLine();

        Calendar calendar = Calendar.getInstance();
        int currYear = calendar.get(Calendar.YEAR);
        int age = currYear - Integer.parseInt("19"+birth.charAt(0)+birth.charAt(1));

        System.out.println("=============");
        System.out.println("이름 : "+name);
        System.out.println("주소 : "+addr);
        System.out.println("나이 : "+age);
    }
}