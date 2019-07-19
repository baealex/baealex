class Score {
    private String name;
    private int korean;
    private int english;
    private int mathmatics;

    Score() {}

    Score(String name, int k, int e, int m) {
        this.name = name;
        this.korean = k;
        this.english = e;
        this.mathmatics = m;
    }

    String getName() { return name; }
    void setName(String n) { name = n; }
    int getKorean() { return korean; }
    int getEnglish() { return english; }
    int getMathmatics() { return mathmatics; }
    void setKorean(int score) { korean = score; }
    void setEnglish(int score) { english = score; }
    void setMathmatics(int score) { mathmatics = score; }
    int getSum() { return korean + english + mathmatics; }
    float getAvg() { return (float) getSum() / 3; }

    void printScore() {
        System.out.println("--------------------------");
        System.out.println("Name       : " + getName());
        System.out.println("Korean     : " + getKorean());
        System.out.println("English    : " + getEnglish());
        System.out.println("Mathmatics : " + getMathmatics());
        System.out.println("Sum        : " + getSum());
        System.out.println("Avg        : " + getAvg());
        System.out.println("--------------------------");
    }
}

class Grade extends Score {

    Grade(String name, int k, int e, int m) {
        super(name, k, e, m);
    }

    public String getGrade() {
        switch((int)getAvg()) {
            case 100:
            case 99:case 98:case 97:
            case 96:case 95:case 94:
            case 93:case 92:case 91:
            case 90:return "Grade A!";
            case 89:case 88:case 87:
            case 86:case 85:case 84:
            case 83:case 82:case 81:
            case 80:return "Grade B!";
            case 79:case 78:case 77:
            case 76:case 75:case 74:
            case 73:case 72:case 71:
            case 70:return "Grade C!";
            case 69:case 68:case 67:
            case 66:case 65:case 64:
            case 63:case 62:case 61:
            case 60:return "Grade D!";
            default:
                return "Try!!!";
        }
    }

    @Override
    void printScore() {
        System.out.println("--------------------------");
        System.out.println("Name       : " + getName());
        System.out.println("Korean     : " + getKorean());
        System.out.println("English    : " + getEnglish());
        System.out.println("Mathmatics : " + getMathmatics());
        System.out.println("Sum        : " + getSum());
        System.out.println("Avg        : " + getAvg());
        System.out.println("Grade      : " + getGrade());
        System.out.println("--------------------------");
    }
}

public class ScoreCalc {
    public static void main(String[] args) {
        Grade people[] = new Grade[3];
        people[0] = new Grade("Nooni",100,100,95);
        people[1] = new Grade("Romi",22,77,54);
        people[2] = new Grade("Toto",85,80,75);

        for (int i = 0; i < 3; i++) {
            people[i].printScore();
        }
    }
}