abstract class Calculator {
    public abstract int add(int a, int b);
    public abstract int subtract(int a, int b);
    public abstract double average(int[] a);
}

class GoodCalc extends Calculator{
    public int add(int a, int b) {
        return a+b;
    }

    public int subtract(int a, int b) {
        return a-b;
    }

    public double average(int[] a) {
        int sum = 0;
        for (int x : a) {
            sum += x;
        }
        return sum/a.length;
    }

    public static void main(String [] args) {
        GoodCalc mGoodCalc = new GoodCalc();
        int [] a = {50,100,20,70,90};
        System.out.println(mGoodCalc.add(22,11));
        System.out.println(mGoodCalc.subtract(33,44));System.out.println(mGoodCalc.average(a));
    }
}