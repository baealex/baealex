import java.util.Vector;

public class VectorEx {
	public static void main(String [] args) {
		Vector v = new Vector();
		v.add("Hello");
		v.add(new Integer(4));
		v.add(new Double(3.14));
		System.out.println("백터내의 요소 객체 수 : "+v.size());
		System.out.println("백터의 현재 용량 : "+v.capacity());

		for(int i=0; i<v.size(); i++) {
			Object obj = v.get(i);
			if(obj instanceof String) {
				String str = (String)obj;
				System.out.println(str);
			}
			else if(obj instanceof Integer) {
				Integer x = (Integer)obj;
				int n = x.intValue();
				System.out.println(n);
			}
			else if(obj instanceof Double) {
				Double y = (Double)obj;
				double d = y.doubleValue();
				System.out.println(d);
			}
		}
	}
}
