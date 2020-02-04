public class GradeSwitch {
    public static void main(String [] args) {
        char grade='C';
        switch(grade) {
            case 'A':
            case 'B':
                System.out.println("Good Boy!");
                break;
            case 'C':
            case 'D':
                System.out.println("More try Boy!");
                break;
            case 'F':
                System.out.println("Bad Boy... :(");
                break;
            default:
                System.out.println("What...?");
        }
    }
}