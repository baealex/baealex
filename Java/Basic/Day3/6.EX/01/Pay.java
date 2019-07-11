public class Pay {
    public static void main(String [] args) {
        int year = 5;
        int child = 0;
        int pay = 1500000;

        switch(year) {
            case 0:
                System.out.println("New People.");
                break;
            case 1:
                pay = pay + 200000;
                break;
            case 2:
                pay = pay + 400000;
                break;
            case 3:
                pay = pay + 600000;
                break;
            case 4:
                pay = pay + 800000;
                break;
            default:
                pay = pay + 1500000;
                break;
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