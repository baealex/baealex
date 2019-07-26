public class GenericMethodExample {
	public static <T> void printArgInfo(T arg) {
		System.out.print("Argument Type is " + arg.getClass());
		System.out.println(" / Value is " + arg.toString());
	}
	public static void main(String [] args) {
		Integer i = new Integer(10);
		char c = 'A';
		float f = 3.14f;
		printArgInfo(i);
		printArgInfo(c);
		printArgInfo(f);
	}
}
