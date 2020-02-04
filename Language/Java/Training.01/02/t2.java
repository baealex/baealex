public class t2 {
    public static void main(String [] args) {
        double [] score = new double[5];

        for(int i=0;i<5;i++) {
            score[i] = Double.parseDouble(args[i]);
        }

        double max = score[0];
        double min = score[0];

        for(int i=0;i<5;i++) {
            if(score[i] > max) {
                max = score[i];
            }
            if(score[i] < min) {
                min = score[i];
            }
        }

        System.out.println("MAX : " + max);
        System.out.println("MIN : " + min);
    }
}