public class ArithmeticOperator {
    public static void main (String[] args) {
        final int TIME = 500;
        int second;
        int minute;
        int hour;

        second = TIME%60;
        minute = TIME/60%60;
        hour = TIME/60/60;

        System.out.print(TIME + " Second is ");
        System.out.print(hour +" Hour, ");
        System.out.print(minute +" Minute, ");
        System.out.println(second +" Second.");
    }
}