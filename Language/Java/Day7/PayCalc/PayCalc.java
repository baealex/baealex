class Allowance extends Pay {
	private int year;
	private int child;
	
	public Allowance() {}
	public Allowance(String name, int bonbong, int year, int child)
	{
		super(name, bonbong);
		this.year = year;
		this.child = child;
	}
	
	public int allowanceCalc() {
		int allowance = 0;
		if(year == 1) {
			allowance = 200000;
		} else if(year == 2) {
			allowance = 400000;
		} else if(year == 3) {
			allowance = 600000;
		} else if(year == 4) {
			allowance = 800000;
		} else {
			allowance = 1500000;
		}
		
		if ( year >= 1 ) {
			if( child > 1 ) {
				allowance = allowance + child *10000;
			}
		}
		return allowance;
	}
	
	@Override
	public void printPay() {
		System.out.println("--------------------");
		System.out.println("---12월 급여 내역---");
		System.out.println("--------------------");
		System.out.println("성명 : " + getName());
		System.out.println("본봉 : " + getBonbong());
		System.out.println("세금 : " + taxCalc());
		System.out.println("수당 : " + allowanceCalc());
		System.out.println("실수령액 : " + silsuCalc());
	}
	
	@Override
	public int silsuCalc() {
		return getBonbong() + allowanceCalc() - taxCalc();
	}
	
	public void setYear(int y) {
		year = y;
	}
	
	public int getYear() {
		return year;
	}
	
	public void setChild(int c) {
		child = c;
	}
	
	public int getChild() {
		return child;
	}
}

class Pay {
	private String name;
	private int bonbong;
	
	public Pay() {}
	public Pay(String name, int bonbong) {
		this.name = name;
		this.bonbong = bonbong;
	}
	
	//setter메소드 : 멤버변수 초기화
	public void setName(String name) {
		this.name = name;
	}
	
	//getter메소드 : 멤버변수를 가져온다.
	public String getName() {
		return name;
	}
	
	public void setBonbong(int bonbong) {
		this.bonbong = bonbong;
	}
	
	public int getBonbong() {
		return bonbong;
	}
	
	public int taxCalc() {
		return (int)(bonbong * 0.045 + 0.5);
	}
	
	public int silsuCalc() {
		return bonbong - taxCalc();
	}
	
	public void printPay() {
		System.out.println("--------------------");
		System.out.println("---12월 급여 내역---");
		System.out.println("--------------------");
		System.out.println("성명 : " + name);
		System.out.println("본봉 : " + bonbong);
		System.out.println("세금 : " + taxCalc());
		System.out.println("실수령액 : " + silsuCalc());
	}
}

public class PayCalc {

	public static void main(String[] args) {
		
		Allowance a1 = new Allowance();
		a1.setName("박일도");
		a1.setBonbong(4000000);
		a1.setYear(4);
		a1.setChild(0);
		a1.printPay();
		
		Pay p1 = new Pay();
		Pay p2 = new Pay();
		Pay p3 = new Pay();
		Pay p4 = new Pay("홍길동", 3000000);
		
		p1.setBonbong(2000000);
		p1.setName("왕눈이");
		p1.printPay();
		
		p2.setBonbong(2500000);
		p2.setName("아로미");
		p2.printPay();
		
		p3.setBonbong(1500000);
		p3.setName("투투");
		p3.printPay();
		
		p4.printPay();
	}

}