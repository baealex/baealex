class Score {
	int kor;
	int eng;
	int mat;
	int sum;
	int avg;
	String name;
}

public class ScoreCalc {

	public static void main(String[] args) {
		Score s1 = new Score();
		Score s2 = new Score();
		Score s3 = new Score();
		
		s1.name = "Nooni";
		s1.kor = 80;
		s1.eng = 95;
		s1.mat = 75;
		s1.sum = s1.kor + s1.eng + s1.mat;
		s1.avg = s1.sum / 3;
		
		s2.name = "Romi";
		s2.kor = 100;
		s2.eng = 80;
		s2.mat = 85;
		s2.sum = s2.kor + s2.eng + s2.mat;
		s2.avg = s2.sum / 3;
		
		s3.name = "Toto";
		s3.kor = 85;
		s3.eng = 70;
		s3.mat = 90;
		s3.sum = s3.kor + s3.eng + s3.mat;
		s3.avg = s3.sum / 3;
		
		System.out.println("-------------------");
		System.out.println("Name : " + s1.name);
		System.out.println("Kor : " + s1.kor);
		System.out.println("Eng : " + s1.eng);
		System.out.println("Math : " + s1.mat);
		System.out.println("Total : " + s1.sum);
		System.out.println("Avg : " + s1.avg);
		System.out.println("-------------------");
		System.out.println("Name : " + s2.name);
		System.out.println("Kor : " + s2.kor);
		System.out.println("Eng : " + s2.eng);
		System.out.println("Math : " + s2.mat);
		System.out.println("Total : " + s2.sum);
		System.out.println("Avg : " + s2.avg);
		System.out.println("-------------------");
		System.out.println("Name : " + s3.name);
		System.out.println("Kor : " + s3.kor);
		System.out.println("Eng : " + s3.eng);
		System.out.println("Math : " + s3.mat);
		System.out.println("Total : " + s3.sum);
		System.out.println("Avg : " + s3.avg);
		System.out.println("-------------------");
	}
}