class GenericClass <T> {
	public void printMethodArgInfo(T arg) {
		System.out.print("Argument Type is " + arg.getClass());
		System.out.println(" / Valau is " + arg.toString());
	}
	public <T> void printGenericMethodArgInfo(T arg) {
		System.out.print("Argument Type is " + arg.getClass());
		System.out.println(" / Value is" + arg.toString());
	}
}

public class NestedGenericMethodExample {
	public static void main(String [] args) {
		GenericClass<String> gc = new GenericClass<String>();
		gc.printGenericMethodArgInfo(10L);
		gc.printGenericMethodArgInfo('A');
		// gc.printMethodArgInfo(10L); // error
		gc.printMethodArgInfo("10L");
	}
}
