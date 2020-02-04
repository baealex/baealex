import java.util.*;

public class boxunbox {
	public static void main(String [] args) {
		Vector v = new Vector();
		v.add('M');
		v.add('y');
		v.add(' ');
		v.add('n');
		v.add('a');
		v.add('m');
		v.add('e');
		v.add(' ');
		v.add('i');
		v.add('s');
		v.add(' ');
		v.add('J');
		v.add('i');
		v.add('n');
		v.add('o');
		v.add('.');
		getAllCharInVector(v);
	}

	public static void getAllCharInVector(Vector<Character> v) {
		for(char c : v) {
			System.out.print(c);
		}
		System.out.println();
	}
}
