class Circle {
    private int r;
    private final double PI = 3.141516;
    
    Circle() {

    }

    void setRadius(int r) {
        this.r = r;
    }

    double getRound() {
        return 2*PI*r;
    }

    double getWidth() {
        return PI*r*r;
    }

    void printResult() {
        java.text.DecimalFormat df = new java.text.DecimalFormat("0.##");
        System.out.println("Circle Radius      : " + r);
        System.out.println("Circle Round       : " + df.format(getRound()));
        System.out.println("Circle Width       : " + df.format(getWidth()));
    }
}

class Rectangle {
    private int h, v;

    Rectangle() {

    }

    void setHorizon(int h) {
        this.h = h;
    }

    void setVertical(int v) {
        this.v = v;
    }

    int getRound() {
        return 2*h+2*v;
    }

    int getWidth() {
        return h*v;
    }

    void printResult() {
        System.out.println("Rectangle Horizon  : " + h);
        System.out.println("Rectangle Vertical : " + v);
        System.out.println("Rectangle Round    : " + getRound());
        System.out.println("Rectangle Width    : " + getWidth());
    }
}

class Triangle {
    private int s1, s2, s3;

    Triangle() {

    }

    void setSide1(int s1) {
        this.s1 = s1;
    }

    void setSide2(int s2) {
        this.s2 = s2;
    }

    void setSide3(int s3) {
        this.s3 = s3;
    }

    double getRound() {
        return s1+s2+s3;
    }

    double getWidth() {
        double s = (getRound())/2;
        return Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    }

    void printResult() {
        java.text.DecimalFormat df = new java.text.DecimalFormat("0.##");
        System.out.println("Triangle Side 1    : " + s1);
        System.out.println("Triangle Side 2    : " + s2);
        System.out.println("Triangle Side 3    : " + s3);
        System.out.println("Triangle Round     : " + getRound());
        System.out.println("Triangle Width     : " + df.format(getWidth()));
    }
}

public class Figure {
    public static void main( String [] args ) {
        Circle mCircle = new Circle();
        mCircle.setRadius(15);
        mCircle.printResult();

        Rectangle mRectangle = new Rectangle();
        mRectangle.setHorizon(20);
        mRectangle.setVertical(35);
        mRectangle.printResult();

        Triangle mTriangle = new Triangle();
        mTriangle.setSide1(15);
        mTriangle.setSide2(19);
        mTriangle.setSide3(23);
        mTriangle.printResult();
    }
}