import java.io.*;

public class DevWriter {
    public static void main(String [] args) {
        String fileName = "dev.txt";

        try {
            FileWriter fw = new FileWriter(fileName, false);
            PrintWriter pw = new PrintWriter(fw);

            pw.println("왕눈이,90,95,60,75");
            pw.println("아로미,100,90,65,90");
            pw.println("가길동,90,100,80,85");
            pw.println("나길동,65,80,85,95");
            pw.println("홍길동,90,95,75,100");
            pw.flush();
            pw.close();
            fw.close();
        } catch(Exception e) {
            System.out.println(e.toString());
        }
    }
}