import java.util.*;
public class HashtableEx {
	public static void main(String [] args){
		Hashtable h = new Hashtable();
		h.put("21", "홍길동");
		h.put("54", "황기태");
		h.put("76", "이소룡");
		h.put("123", "해리슨포드");
		System.out.println("Hashtable의 키 개수 : " + h.size());

		Enumeration e = h.keys();
		while(e.hasMoreElements()) {
			String key = (String)e.nextElement();
			String value = (String)h.get(key);
			System.out.println(key + ":" + value);
		}
	}
}
