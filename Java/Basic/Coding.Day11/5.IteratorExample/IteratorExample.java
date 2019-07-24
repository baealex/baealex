import java.util.*;

public class IteratorExample {
	public static void main(String [] args) {
		ArrayList a = new ArrayList();
		a.add("Hello");
		a.add(3);
		a.add(3.14);
		a.add(2, 3.14);
		Iterator i = a.iterator();
		while(i.hasNext()) {
			Object obj = i.next();
			if(obj instanceof String) {
				String str = (String)obj;
				System.out.println(str);
			} else if(obj instanceof Integer) {
				int n = (Integer)obj;
				System.out.println(n);
			} else if(obj instanceof Double) {
				double d = (Double)obj;
				System.out.println(d);
			}
		}
	}
}
