import java.io.*;

public class ReadFromLine {
    public static void main(String[] args) {
        try {
            System.out.println("데이타를 입력하세요");
            InputStreamReader isr = new InputStreamReader(System.in);
            LineNumberReader br = new LineNumberReader(isr);
            StringBuffer sb = new StringBuffer();
            String s = "";
            while (!(s = br.readLine()).equals("999")) {//
                sb.append(br.getLineNumber() + " " + s + "\n");
            }
            System.out.println(sb.toString());
            br.close();
            isr.close();
        } catch (Exception ee) {
            System.out.println(ee.toString());
        }
    }
}