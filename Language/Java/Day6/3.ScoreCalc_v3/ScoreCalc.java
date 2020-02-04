class Score {
    private String Name;
    private int Korean;
    private int English;
    private int Mathmatics;

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
        for(int i=0;i<people.length;i++) {
            people[i] = new Score();
        }
        people[0].setName("Nooni");
        people[0].setKorean(100);
        people[0].setEnglish(53);
        people[0].setMathmatics(95);
        
        people[1].setName("Romi");
        people[1].setKorean(22);
        people[1].setEnglish(77);
        people[1].setMathmatics(54);
        
        people[2].setName("Toto");
        people[2].setKorean(85);
        people[2].setEnglish(60);
        people[2].setMathmatics(45);

        for(int i=0;i<3;i++) {
            people[i].printScore();
        }
    }
}