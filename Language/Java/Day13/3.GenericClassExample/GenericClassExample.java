class SimpleGeneric<T> {
	private T[] values;
	private int index;
	SimpleGeneric(int len) {
		values = (T[])new Object[len];
		index = 0;
	}
	public void add(T ... args) {
		for(T e : args) {
			values[index++] = e;
		}
	}
	public void print() {
		for(T e : values) {
			System.out.print(e + " ");
		}
		System.out.println();
	}
}

public class GenericClassExample {
	public static void main(String [] args) {
		SimpleGeneric<Integer> gInt = new SimpleGeneric<Integer>(10);
		SimpleGeneric<Double> gDou = new SimpleGeneric<Double>(10);
		gInt.add(1,2);
		gInt.add(1,2,3,4,5,6,7);
		gInt.add(0);
		gInt.print();
		gDou.add(10.0,20.0,30.0);
		gDou.print();
	}
}
