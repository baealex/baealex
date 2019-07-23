import java.io.*;

public class FileWriterDemo {
	public static void main(String [] args) {
		String source = "JAVA\n"+"JSP\n"+"EJB\n"+"OJT\n"+"가나다\n";

		String fname = "";

		try {
			System.out.println("저장할 파일명을 입력하세요:");
			BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
			fname = in.readLine();
		} catch(Exception e) {
			System.out.println("Error: "+ e.toString());
		}

		try {
			FileWriter fw = new FileWriter(fname);
			fw.write(source);
			fw.close();
			System.out.println("파일을 저장했습니다.");

			FileReader fr = new FileReader(fname);
			int i;
			System.out.println("파일을 읽어 옵니다.");
			while((i = fr.read()) != -1) {
				System.out.print("("+i+")");
				System.out.print((char)i);
			}
			fr.close();
		} catch(Exception e) {
			System.out.println(e.toString());
		}
	}
}
