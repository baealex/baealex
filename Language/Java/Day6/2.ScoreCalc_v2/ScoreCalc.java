class Score {
    String Name;
    int Korean;
    int English;
    int Mathmatics;
    
    int getSum() {
        return Korean+English+Mathmatics;
    }
    float getAvg() {
        return (float)getSum()/3;
    }
}

public class ScoreCalc {
    public static void main(String [] args) {
        Score people[] = new Score[3];
        for(int i=0;i<people.length;i++) {
            people[i] = new Score();
        }
        people[0].Name = "Nooni";
        people[0].Korean = 100;
        people[0].English = 53;
        people[0].Mathmatics = 95;
        
        people[1].Name = "Romi";
        people[1].Korean = 22;
        people[1].English = 77;
        people[1].Mathmatics = 54;
        
        people[2].Name = "Toto";
        people[2].Korean = 85;
        people[2].English = 60;
        people[2].Mathmatics = 45;

        for(int i=0;i<3;i++) {
            System.out.println("Name : "+people[i].Name);
            System.out.println("Korean : "+people[i].Korean);
            System.out.println("English : "+people[i].English);
            System.out.println("Mathmatics : "+people[i].Mathmatics);
            System.out.println("Sum : "+people[i].getSum());
            System.out.println("Avg : "+people[i].getAvg());
            System.out.println("--------------------------");
        }
    }
}