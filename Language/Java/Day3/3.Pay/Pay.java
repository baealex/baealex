public class Pay {
    public static void main(String [] args) {
        int year = 5;
        int child = 0;
        int pay = 1500000;

        if(year == 0) {
            System.out.println("New People.");
        } else if(year == 1) {
            pay = pay + 200000;
            System.out.println("You work, 1 year.");
        } else if(year == 2) {
            pay = pay + 400000;
        } else if(year == 3) {
            pay = pay + 600000;
        } else if(year == 4) {
            pay = pay + 800000;
        } else {
            pay = pay + 1500000;
        }

        if(year >= 1) {
            if(child > 1) {
                pay = pay + (child * 200000);
            }
        }

        System.out.println("Defalt Pay : " + pay);
        System.out.println("Year Pay : " + pay * 13);
        System.out.println("Month Pay : " + pay * 13 / 12);
    }
}