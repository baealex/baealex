import java.io.*;

public class ReadFromFile {
    public static void main(String[] args) {
        String fname = "/home/baealex/GitHub/ProgramingRecord/Java/Basic/Day9/6.ReadFromFile/ReadFromFile.java";

        File f = new File(fname);
        String path = f.getAbsolutePath();
        System.out.println(path);
        try {
            FileReader fr = new FileReader(f);
            BufferedReader br = new BufferedReader(fr);
            StringBuffer sb = new StringBuffer();
            String s = "";
            while ((s = br.readLine()) != null) {
                sb.append(s + "\n");
            }
            s = sb.toString();
            System.out.println(s);
            br.close();
            fr.close();
        } catch (Exception ee) {
            System.out.println(ee.toString());
        }
    }
}