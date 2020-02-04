import java.io.*;
import java.util.*;

public class DevProcess {
    public static void main(String [] args) {
        String fileName = "../1.DevWriter/dev.txt";
        String fileNameOutput = "dev.output.txt";

        try {
            FileReader fr = new FileReader(fileName);
            BufferedReader br = new BufferedReader(fr);

            FileWriter fw = new FileWriter(fileNameOutput, false);
            PrintWriter pw = new PrintWriter(fw);

            String line = "";

            pw.println("2019년 신입사원 평가 점수");
            pw.println("");
            pw.println("평가일 : " + new Date().toLocaleString());
            pw.println("=======================================");
            pw.println("성명 JAVA JSP SPRING PROJECT TOT AVG");
            pw.println("=======================================");
            while(true) {
                line = br.readLine();

                if(line == null) {
                    break;
                }
                String [] str = line.split(",");

                String name = str[0];
                int java = Integer.parseInt(str[1]);
                int jsp = Integer.parseInt(str[2]);
                int spring = Integer.parseInt(str[3]);
                int project = Integer.parseInt(str[4]);

                int tot = java + jsp + spring + project;
                int avg = tot / 4;
                pw.println(name + " " + java + " " + jsp + " " + spring + " " + project + " " + tot + " " + avg);
                pw.println("=======================================");
            }

            br.close();
            fr.close();

            pw.flush();
            pw.close();
            fw.close();
        } catch(Exception e) {
            
        }
    }
}