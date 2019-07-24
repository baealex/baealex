import java.util.*;

public class HashTableExample {
	public static void main(String [] args) {
		Hashtable members = new Hashtable();
		Scanner sin = new Scanner(System.in);
		System.out.println("공백으로 분리된 이름과 전화번호 5개를 입력하십시오.");
		for(int i=0;i<5;i++) {
			System.out.println("이름, 전화번호");
			String name = sin.next();
			String tel = sin.next();
			members.put(name, tel);
		}
		System.out.println("전화번호를 검색할 이름을 입력하십시오.");
		String key = sin.next();
		String val = (String)members.get(key);
		if(val != null) {
			System.out.println(key + "의 전화번호는 " + val + "입니다.");
		}
		else {
			System.out.println("입력하신 이름을 찾을 수 없습니다.");
		}
	}
}
