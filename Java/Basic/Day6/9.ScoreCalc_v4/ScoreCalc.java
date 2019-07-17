class Score {
    private String Name;
    private int Korean;
    private int English;
    private int Mathmatics;

    public Score() {

    }

    public Score(String n, int k, int e, int m) {

    }

    String getName() {
        return Name;
    }

    void setName(String n) {
        Name = n;
    }

    int getKorean() {
        return Korean;
    }

    int getEnglish() {
        return English;
    }

    int getMathmatics() {
        return Mathmatics;
    }

    void setKorean(int score) {
        Korean = score;
    }

    void setEnglish(int score) {
        English = score;
    }

    void setMathmatics(int score) {
        Mathmatics = score;
    }
    
    int getSum() {
        return Korean+English+Mathmatics;
    }

    float getAvg() {
        return (float)getSum()/3;
    }

    void printScore() {
        System.out.println("--------------------------");
        System.out.println("Name : " + getName());
        System.out.println("Korean : " + getKorean());
        System.out.println("English : " + getEnglish());
        System.out.println("Mathmatics : " + getMathmatics());
        System.out.println("Sum : " + getSum());
        System.out.println("Avg : " + getAvg());
        System.out.println("--------------------------");
    }
}

public class ScoreCalc {
    public static void main(String [] args) {
        Score people[] = new Score[3];
        people[0] = new Score("Nooni",100,53,95);
        people[1] = new Score("Romi",22,77,54);
        people[2] = new Score("Toto",85,60,45);

        for(int i=0;i<3;i++) {
            people[i].printScore();
        }
    }
}