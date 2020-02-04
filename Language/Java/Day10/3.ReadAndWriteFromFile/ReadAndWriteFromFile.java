import java.io.*;
public class ReadAndWriteFromFile {
    public void readFile(String fn) throws IOException {
        FileReader fr = new FileReader(fn);
        BufferedReader br = new BufferedReader(fr);
        StringBuffer sb = new StringBuffer();
        String temp = "";
        while((temp=br.readLine())!=null) {
            sb.append(temp+"\n");
        }
        System.out.println(sb.toString());
        br.close();
        fr.close();
    }

    public void readnwrite(String fn, boolean append) throws IOException {
        String s = null;
        FileWriter fw = new FileWriter(fn, append);
        PrintWriter pw = new PrintWriter(fw);
        while(!(s=readbuff()).equals("999")) {
            pw.println(s);
            pw.flush(); // 파일에 출력할 수 있도록 밀어주는 역할?
        }
        pw.close();
        fw.close();
    }

    public String readbuff() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        return br.readLine();
    }

    public static void main(String [] args) {
        String fname = "aaa.txt";
        ReadAndWriteFromFile baw = new ReadAndWriteFromFile();
        try {
            baw.readnwrite(fname, false);
            baw.readFile(fname);
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}