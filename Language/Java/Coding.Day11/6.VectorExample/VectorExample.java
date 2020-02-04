import java.util.*;

public class VectorExample {
	public static void main(String [] args) {
		Vector<Integer> v = new Vector<Integer>(3);
		System.out.println("벡터의 초기 크기는 " + v.capacity());
		v.add(new Integer(1));
		v.add(new Integer(22));
		v.add(new Integer(51));
		v.add(new Integer(10));
		System.out.println("벡터의 크기는 " + v.capacity());
		Collections.sort(v);
		for(int i=0;i<v.size();i++) {
			Integer n = v.elementAt(i);
			System.out.println(n.toString());
		}
	}
}
